module StringHelper
  def self.no_space(string)
    string.gsub(/\s+/, '')
  end 
end