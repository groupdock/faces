# ===========================================================================
# Project:   Faces
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore

proxy '/people', :to => 'localhost:4567'
proxy '/person', :to => 'localhost:4567'
