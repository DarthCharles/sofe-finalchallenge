module FileHelper

  def self.load_asset(file)
    File.read(File.dirname(__FILE__) + '/assets/' + file)
  end  

end
