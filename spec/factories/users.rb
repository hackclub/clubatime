FactoryBot.define do
  factory :user do
    name { "MyString" }
    email { "MyString" }
    image { "MyString" }
    provider { "MyString" }
    uid { "MyString" }
    slack_id { "MyString" }
    github_username { "MyString" }
    birthday { "2026-03-13" }
    address { "MyText" }
    role { 1 }
    verification_status { "MyString" }
  end
end
