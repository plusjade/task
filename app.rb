require 'rubygems'
require 'sinatra'
require 'json'
require 'erb'

require './test_data'

# Mock REST Data
# ===================================

get '/courses.json' do
  content_type :json
  TestData.courses.to_json
end

get '/courses/:id.json' do
  content_type :json
  TestData.course(params[:id]).to_json
end

get '/courses/:id/assignments.json' do
  content_type :json
  TestData.assignments(params[:id]).to_json
end

get '/assignments/:id.json' do
  content_type :json
  TestData::Assignment.to_json
end


# UI
# =================================

get '/' do
  @content = erb :index
  erb :default
end


get '/courses' do
  @content = erb :courses_index
  erb :default
end

get '/courses/:id' do
  @content = erb :courses_show
  erb :default
end

