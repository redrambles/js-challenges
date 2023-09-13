def countVowels(string)
  lower_string = string.downcase
  vowels = ["a", "e", "i", "o", "u", "y"]
  vowel_array = lower_string.chars.select { |letter| vowels.include?(letter) }
  vowel_array.length
end

puts countVowels("Hello World!")
