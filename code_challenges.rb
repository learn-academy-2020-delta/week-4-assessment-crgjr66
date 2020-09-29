# ASSESSMENT 4: Ruby Coding Practical Questions

# --------------------1) Create a method that takes in an array and returns an array with only odd numbers sorted from least to greatest.

fullArr1 = [4, 9, 0, '7', 8, true, 'hey', 7, 199, -9, false, 'hola']
# Expected output: [-9, 7, 9, 199]
fullArr2 = ['hello', 7, 23, -823, false, 78, nil, '67', 6, 'Number']
# Expected output: [-823, 7, 23]
def odd_sorted (array)
  new_array = []
  array.each do |value|
    if value.class == Integer && value % 2 == 1
      new_array << value
    end
  end
  new_array.sort
end

p odd_sorted(fullArr1)
p odd_sorted(fullArr2)


# --------------------2) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data from the bike object.
class Bike
  def initialize
    @model = "Trek"
    @wheels = 2
    @frame_size = "168cm"
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end
end

my_bike = Bike.new
p my_bike.bike_info


# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------3) Add a bell to the bike class and create a method that will ring the bell when the method is called.
class Bike2
  def initialize
    @model = "Trek"
    @wheels = 2
    @frame_size = "168cm"
    @bell = ""
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end

  def ring_bell
    @bell = "Beep beep!"
  end
end

my_bell_bike = Bike2.new
p my_bell_bike.ring_bell


# Expected output example: my_bike.ring_bell => 'Beep beep!'


# -------------------4) Add a speedometer to the Bike class. The speed should be initialized at 0.
class Bike3
  def initialize
    @model = "Trek"
    @wheels = 2
    @frame_size = "168cm"
    @bell = ""
    @speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end

  def ring_bell
    @bell = "Beep beep!"
  end

  def speed
    @speed
  end
end

my_speed_bike = Bike3.new
p my_speed_bike.speed


# Expected output example: my_bike.speed => 0


# -------------------5) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.
class Bike4
  def initialize
    @model = "Trek"
    @wheels = 2
    @frame_size = "168cm"
    @bell = ""
    @speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and a #{@frame_size} frame."
  end

  def ring_bell
    @bell = "Beep beep!"
  end

  def speed
    @speed
  end

  def pedal_faster (speed)
    @speed += speed
  end

  def brake (speed)
    if @speed > speed
      @speed -= speed
    else
      @speed = 0
    end
  end
end

my_everything_bike = Bike4.new
p my_everything_bike.pedal_faster 10
p my_everything_bike.brake 15


# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
