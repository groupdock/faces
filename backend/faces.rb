#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'json'
require 'redis'

before do
  @redis = Redis.new
end

def load_people(ids)
  ids.map do |people_id|
    Marshal.load(@redis[people_id])
  end  
end

# return list of all people. Just get all people and return as JSON
get '/people' do
  @people = load_people(begin
    @redis.smembers('faces:all-people')
  rescue
    []
  end)
  
  content_type 'application/json'
  {'content' => @people }.to_json
end

# create a new person. request body to contain json
post '/people' do
  json = JSON.parse(request.body.read) rescue nil
  person_id = @redis.incr("faces:people_counter")
  person = { :guid => "/person/#{person_id}",
             :name => json['name'], 
             :company => json['company'], 
             :website => json['website'],                           
             :picture => json['picture'] }
  halt(401, 'Invalid Format') if person.nil?
 
  @redis["faces:person_#{person_id}"] = Marshal.dump(person)
  @redis.sadd('faces:all-people', "faces:person_#{person_id}")
  response['Location'] = "/person/#{person_id}"
  response.status = 201
end

# get an individual person
get '/person/:id' do
  person = Marshal.load(@redis["faces:person_#{params[:id]}"]) rescue nil
  halt(404, 'Not Found') if person.nil?
  
  content_type 'application/json'
  { 'content' => person }.to_json
end

# update an individual person
put '/person/:id' do
  person = Marshal.load(@redis["faces:person_#{params[:id]}"])
  halt(404, 'Not Found') if person.nil?
  
  json = JSON.parse(request.body.read) rescue nil
  new_person = { :guid => "/person/#{person_id}",
             :name => json['name'], 
             :company => json['company'], 
             :website => json['website'],                           
             :picture => json['picture'] }  
  halt(401, 'Invalid Format') if person.nil?
  
  @redis["faces:person_#{params[:id]}"] = Marshal.dump(new_person)
  response['Content-Type'] = 'application/json'
  { 'content' => new_person }.to_json
end

# delete an individual person
delete '/person/:id' do
  @redis.srem('faces:all-people', "faces:person_#{params[:id]}")
  @redis.del("faces:person_#{params[:id]}")
end

