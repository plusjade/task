require 'rubygems'
require 'sinatra'
require 'json'
require 'erb'

module TestData
  Assignment = {
    "course_id" => 250,
    "name" => "haro",
    "description" => "text text text text text text text text text text text text",
    "topic" => "topic",
    "type" => "paper",
    "duedate" => "01/05/2012",
    "severity" => "critical",
    "is_deliverable" => true
  }
  
  def self.assignments
    a = []
    5.times do
      a << Assignment.dup
    end
    a
  end
  
end

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

get '/courses/:id/assignments' do
  content_type :json
  TestData.assignments.to_json
end


get '/assignments/:id' do
  content_type :json
  TestData::Assignment.to_json
end


