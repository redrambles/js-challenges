def title_case(text)
  text.gsub(/\b\w/) { |match| match.upcase }
end

titled_text = title_case("javascript programming")

puts titled_text.inspect
