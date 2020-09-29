# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.  

1. What is an instance variable in Ruby? How is it different from other variables?

  Your answer: An instance variable is preceded with the @ symbol and belongs to an instance of a class.  If we create an object, that is an instance of a class, we inherit the instance variables and methods of that class.

  Researched answer:   An instance variable has a name beginning with @ and is found in the initialize section of the class definition.  These variables are part of the class and are created when an object is declared and inherits the class type.
  A local variable can only be used inside the method where it is defined.


2. What is a block in Ruby?

  Your answer: Blocks in Ruby are chunks of code that start with "do" and end with "end".

  Researched answer: A block in Ruby is a way to group statements together and appears in code next to the method call's last parameter.  this code is not executed at the time it is encountered.  Ruby uses {} for single line blocks, and do..end for multiple line blocks.


3. Ruby has an implicit return. What does that mean?

  Your answer: Do not know.

  Researched answer: Whenever a code block is executed Ruby returns the value of the last expression. An example is the getter method. We call a method and always expect some value in return. The keyword 'return' is not necessary.


4. What is object-oriented programming? How is it different than functional programming?

  Your answer: A programming method that is based on objects, classes, and inheritance, rather than functions and logic (i.e. the way I write code).

  Researched answer: Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. OOP focuses on the objects that developers want to use rather than the logic required to use them. This is good for programs that are large, complex and constantly maintained.


5. What is the difference between a class and an object?

  Your answer: In Ruby everything is an object, and everything belongs to a class. Objects are instances of a class.

  Researched answer: An object is just a piece of data like the number 7, but the Ruby programming language categorizes everything into classes; like Integers, Floats, and Strings.



6. STRETCH: What is `attr_accessor`?

  Your answer: I dont know.

  Researched answer: It is a Ruby way of making instance variables available to the outside world without needing getter and setter methods to access them.


## Looking Ahead: Terms for Next Week
- PostgreSQL - PostgreSQL is an open source object-relational database with that is known for it's for reliability, features, and performance.

- API - An application programming interface that defines interactions between multiple software variants. It defines function calls that can be made, how to make them, and the data that should be used.

- CRUD - CRUD stands for "Create, Read, Update, and Delete," which are the four basic database operations.

- Ruby on Rails - It is a server-side web application framework that is written in Ruby.  It provides default structures for databases, web services, and web pages.
It uses web standards like JSON for data transfer, and HTML, CSS, and Javascript for user interface.

- ORM - Object-relational mapping is a programming technique for converting data between incompatible systems using object-oriented programming languages.

- Active Record - Active Record is the Model in Model View Controller (MVC). The model - is the layer of the system responsible for business data and logic. It makes it easy to create and use business objects whose data needs to be stored in a database.
