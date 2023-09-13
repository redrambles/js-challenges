def count_occurences(str, char)
  str.downcase.split(char.downcase).length
end

puts count_occurences("banana", "a")
