source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.0.5'
gem 'pg', '~> 0.18'
gem 'sqlite3', groups: [:development]
gem 'puma', '~> 3.0'
gem 'dotenv-rails', groups: [:development, :test]
gem 'rack-cors'
gem 'geocoder'
gem 'google_places'
gem 'pry', groups: [:development]
gem 'unsplash'
gem 'foreman', '~> 0.82.0'
gem 'foursquare2'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
