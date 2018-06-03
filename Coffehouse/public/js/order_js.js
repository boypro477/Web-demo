       $(document).ready(function () {
            var number = 0;
            var result = 0;
            $(".add_cup1").click(function () {
                number++;
                document.getElementById("number_cup").innerHTML = number;


                result = result + $('.add_cup1 > .price-cup').data("id")
                document.getElementById("result_cup").innerHTML = result;
            }); $(".add_cup2").click(function () {
                number++;
                document.getElementById("number_cup").innerHTML = number;


                result = result + $('.add_cup2 > .price-cup').data("id")
                document.getElementById("result_cup").innerHTML = result;
            });
        });
