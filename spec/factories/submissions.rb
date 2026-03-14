FactoryBot.define do
  factory :submission do
    user { nil }
    club { nil }
    name { "MyString" }
    description { "MyText" }
    code_url { "MyString" }
    playable_url { "MyString" }
    screenshot_url { "MyString" }
    project_type { "MyString" }
    project_files { "" }
    hackatime_project { "MyString" }
    hackatime_hours { "9.99" }
    hours_override { "9.99" }
    status { 1 }
    justification { "MyText" }
    feedback { "MyText" }
  end
end
