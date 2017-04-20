// Question 1

document.write("<h3>Question1</h3>");
for (var i = 0; i < 5 ; i ++)
    document.write("Hello World!  <br>");

// Question 2

    document.write("<h3>Question2</h3>");
    for (var i = 1 ; i <= 10 ; i++)
        document.write(i+"<br>");

// Question 3 

     document.write("<h3>Question3</h3>");
     var table = prompt("Question 2 : Enter Table Number");
     var lengthTable = prompt("Enter Length Of Table");
     for (var i = 1 ; i <= lengthTable ; i++)
        document.write(table + " x " + i + " = " + table*i + "<br>");

// Question 4 

    document.write("<h3>Question4</h3>");
    var arrQ4 = ["Nokia","Samsum","Apple","Sony","Huawei"];
    for (var i=0 ; i< arrQ4.length ; i++ )
        document.write(arrQ4[i] + "<br>");

// Question 5

    document.write("<h3>Question5</h3>");
    var arrQ5 = ["Apple" , "Banana" ,"Mango" ,"Orange" , "Strawberry" ];
    for (var i=0; i < arrQ5.length ; i++)
        document.write(arrQ5[i] + "<br>");
    for (var j=0; j < arrQ5.length ; j++)       
        document.write("Element On Index " + j + " Is " + arrQ5[j] + "<br>");
        
// Question 6 

    document.write("<h3>Question6</h3>");
    var inputNumQ6 = prompt("Enter Number Of Items");
    var itemsQ6;
    document.write("Number Of Inputs : "+ inputNumQ6 + "<br>");
    document.write("Items <br>");
    for (var i = 0; i<inputNumQ6; i++ )
    {
        itemsQ6 = prompt("Enter Value For Index " + i );
        document.write(itemsQ6+"<br>");
    }


// Question 7 

    document.write("<h3>Question7</h3>");
    document.write("<h3>Counting</h3>");
    for (var i = 1 ; i <= 15 ; i++)
        document.write(i + " , ");

    document.write("<h3>Reverse Counting</h3>");
    for (var i = 10 ; i >= 1 ; i--)
        document.write(i + " , ");

    document.write("<h3>Even</h3>");
    for (var i = 0 ; i <= 20 ; i+=2)
        document.write(i + " , ");

    document.write("<h3>Odd</h3>");
    for (var i = 1 ; i <= 20 ; i+=2)
        document.write(i + " , ");

    document.write("<h3>Series</h3>");
    for (var i = 2 ; i <= 20 ; i+=2)
        document.write(i +"K "+" , ");


// Question 8 (RE DO)

    document.write("<h3>Question8</h3>");
    var arrBakery = ["cake" , "apple pie", "cookie" , "chips" ," patties"];
    var inputBakery = prompt("Welcome To Danziee's Bakery. :) What Do You Want To Order");
    
    for (var i=0 ; i < arrBakery.length ; i++)
    {
        if (inputBakery === arrBakery[i])    
        {
            document.write(inputBakery + " Is Avilable At Index " + i + " In Our Bakery.");   
            break;
        }
        // else
        // {
        //     document.write(" We're Sorry . " + inputBakery + " Is Not Avilable In Our Bakery.");
        //     break;
        // }
    }
    
// Question 9

     document.write("<h3>Question9</h3>");

     var arrQ9 = [1,4,5,66,86,2,10];     
     var tempQ9 = 0;
     document.write("Array Items: " + arrQ9 + "<br>");
     for (var i=0 ; i<arrQ9.length; i++)
        {
            if(arrQ9[i]>tempQ9)
            {
                tempQ9=arrQ9[i];
            }
            
}
    document.write(tempQ9 + " Is The Largest Number In This Array");

// Question 10 

    document.write("<h3>Question10</h3>");
    
     var arrQ10 = [1,4,5,66,86,2,10];
     var tempQ10 =100;
     document.write("Array Items: " + arrQ10 + "<br>");
     
     for (var i=0 ; i < arrQ10.length; i++)
        {
            if(arrQ10[i]<tempQ10)
            {
                tempQ10=arrQ10[i];
            }
            
        }
    document.write(tempQ10 + " Is The Smallest Number In This Array");


// Question 11

    document.write("<h3>Question11</h3>");
    var arrQ11 = [22,1,2,6,33,55,77,3];
    var tempQ11 = 0 ;
    var temp1Q11 = 100; 
    document.write("Array Items : " + arrQ11 + "<br>");
    for (var i=0; i < arrQ11.length ; i++)
    {
        if(arrQ11[i]>tempQ11)
        {
            tempQ11=arrQ11[i];
        }

        if (arrQ11[i]<temp1Q11)
        {
            temp1Q11=arrQ11[i];
        }
 }

 document.write("The Smallest Number Is : " + temp1Q11 +" <br> The Largest Number Is :  "+ tempQ11 );


// Question 12

    document.write("<h3>Question12</h3>");
    for (var i=1; i<=20; i++)
    {
        document.write(i*5 + " , ");
    }

// Question 13

    document.write("<h3>Question13</h3>");
    var studentsQ13 = ["Ali","Taha","Majid","Asif"];
    var scoreQ13 = [54,66,78,40];

    document.write("<table><tr><th>Students</th> <th>Scores</th></tr> <tr><td>"+studentsQ13[0]+"</td><td>"+scoreQ13[0]+"</td></tr> <tr><td>"+studentsQ13[1]+"</td><td>"+scoreQ13[1]+"</td></tr> <tr><td>"+studentsQ13[2]+"</td><td>"+scoreQ13[2]+"</td></tr> <tr><td>"+studentsQ13[3]+"</td><td>"+scoreQ13[3]+"</td></tr> </table>");

// Question 14 (Check)

    document.write("<h3>Question14</h3>");
    var scoreQ14 = [34,55,12,77,8,10];
    var inputQ14 = +prompt(scoreQ14+" Enter Number To Stop Array On");
    var tempQ14;
    for (var i=0; i<scoreQ14.length; i++)
    {
        if (inputQ14===scoreQ14[i])
        {
            tempQ14=slice.scoreQ14(0,i+1);
            break;
        }
    }
    
    document.write(tempQ14);
   
// Question 15 
        document.write("<h3>Question15</h3>");
    var arrQ15 = [[1,2,3],[4,5,6],[7,8,9]];
    for (var i=0; i<arrQ15.length; i++)
    {
    
         document.write(arrQ15[i]);
         document.write("<br>");
    }

// Question 16 

    document.write("<h3>Question16</h3>");
    var inputQ16 = +prompt("Enter Number");
    document.write(inputQ16);
    for (var i=inputQ16; i > 0  ; i=i-0.5)
    {
        inputQ16=inputQ16-0.5;
        document.write(" , " +inputQ16);

    } 


// Question 17 

    document.write("<h3>Question17</h3>");
    for(var i=0 ; i<= 20 ; i++)
    {
        if(i%2===0)
        {
            document.write(i + " Is Even" + "<br>");
        }
        else
        {
            document.write(i + " Is Odd" + "<br>" );
        }
    }

// Question 18 

     document.write("<h3>Question18</h3>");
      document.write("<h3>Product Of Odd Integers From 1 to 7</h3>");
     var ans=1;
     for (var i=1 ; i<7 ; i++ )
     {
         if(i%2!==0)
         {
             ans=ans*(i+2);
             document.write(ans + "<br>");
         }
         
     }
    
// Question 19 

    document.write("<h3>Question19</h3>");
        
        var inputQ19 = +prompt("Enter Initial Number Of Stars");
        for (var k=inputQ19 ; k>0; k--)
    {
        for (var l=0 ; l < k ; l++ )
        {
            document.write("*");
        }
        document.write("<br>");
    }


// Question 20 

    document.write("<h3>Question20</h3>");

        document.write("<h3>a</h3>");

        var inputQ20 = +prompt("Enter Number For Stars");
    for (var i=0 ; i<inputQ20; i++)
    {
        for (var j=0 ; j< inputQ20 ; j++ )
        {
            document.write("*");
        }
        document.write("<br>");
    }

    document.write("<h3>b</h3>");

    for (var i=0 ; i<inputQ20; i++)
    {
        for (var j=0 ; j< i ; j++ )
        {
            document.write("*");
        }
        document.write("<br>");
    }

    document.write("<h3>c</h3>");

        for (var k=inputQ20 ; k>0; k--)
    {
        for (var l=0 ; l< k ; l++ )
        {
            document.write("*");
        }
        document.write("<br>");
    }


document.write("<h3>d</h3>");
            
        for (var i=0 ; i<inputQ20; i++)
        {
            for (var j=0 ; j< i ; j++ )
            {
                document.write("*");
            }
            document.write("<br>");
        }

        for (var k=inputQ20 ; k>0; k--)
        {
            for (var l=0 ; l< k ; l++ )
            {
                document.write("*");
            }
            document.write("<br>");
        }


