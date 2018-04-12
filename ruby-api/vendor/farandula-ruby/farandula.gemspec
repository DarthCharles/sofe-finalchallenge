# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "farandula/version"

Gem::Specification.new do |s|
  s.name        = "farandula"
  s.version     = Farandula::VERSION
  s.authors     = ["Perla Ruiz, Isaac Lopez, Daniel Varela"]
  s.homepage    = "https://github.com/Nearsoft/farandula"
  s.summary     = %q{Provides a easy to use lib for travel industries }
  s.description = s.summary 

  s.rubyforge_project = "farandula"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  s.add_development_dependency 'minitest'
  s.add_development_dependency 'minitest-reporters'
  s.add_development_dependency 'rubocop'

  # Runtime libs 
  
  s.add_runtime_dependency 'rest-client', '~> 2.0.1'
  s.add_runtime_dependency 'hashie', '~> 3.5.5'
  s.add_runtime_dependency 'jbuilder', '~> 2.4', '>= 2.4.1'
  
end