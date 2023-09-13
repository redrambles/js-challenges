def fizz_buzz_array(target)
  result = []

  (1..target).each do |num|
    result << if num % 5 == 0 && num % 3 == 0
      "FizzBuzz"
    elsif num % 5 == 0
      "Buzz"
    elsif num % 3 == 0
      "Fizz"
    else
      num
    end
  end

  result
end

puts(fizz_buzz_array(15))
