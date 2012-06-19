module TestData
  
  Universities = [
    'Stanford',
    'Cal-Tech',
    'UC Berkeley',
    'UC Irvine',
    'UC Santa Cruz',
    'UC Davis',
    'UC Riverside',
    'UCLA',
    'USC',
    'Loyola'
  ]  
  
  Terms = ['Fall', 'Winter', 'Spring', 'Summer']
  Phases = ["first-pass", "second-pass"]
  State = ["new", "paused", "finished"]
  Severity = ['optional', 'normal', 'critical']
  Types =[
    "take home exam",
    "other test",
    "midterm",
    "problems",
    "watch film",
    "listen to audio",
    "reminder",
    "other"
  ]
  
  
  def self.course(id=nil, assignments=true)
    course = {
      "id" => id,
      "university" => Universities[(0 + rand(10))],
      "name" => "a course name for id: #{id}",
      "term" => self.term,
      "meeting_schedule" => "some meeting schedule",
      "office_hours" => " some office hours",
      "textbook_information" => "some textbook_information",
      "footnotes" => "a lot of footnotes",
      
      "date_uploaded" => self.date,
      "phase" => Phases[(0+rand(2))],
      "status" => State[(0+rand(3))],
    }
    course["assignments"] = self.assignments(id) if assignments
    course
  end
  
  def self.assignment(course_id=nil)
     {
      "id" => course_id,
      "course_id" => course_id,
      "name" => "A cool assignment",
      "description" => "text text text text text text text text text text text text",
      "topic" => "topic",
      "type" => self.type,
      "duedate" => self.date,
      "severity" => self.severity,
      "is_deliverable" => self.is_deliverable
    }
  end
  
  def self.courses
    10.times.map { |i| self.course(i, false) }
  end
  
  def self.assignments(id=nil)
    5.times.map { |i| self.assignment(i) }
  end
  
  # random date string
  def self.date
    "#{(1 + rand(12))}/#{(1 + rand(30))}/20#{(10 + rand(3)) }"
  end
  
  def self.type
    Types[(0 + rand(7))]
  end
  
  def self.term
    Terms[(0 + rand(3))]
  end
  
  def self.severity
    Severity[(0 + rand(2))]
  end
  
  def self.is_deliverable
    ( 0 + rand(2) ).zero?
  end
  
end