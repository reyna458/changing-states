// let measureRate = [];

$(document).ready(function() {
    $.getJSON('data/shirleys.json', function(data) {
        var myhtml =`<div id='return' class='hidden'>

                <p class='goback'>Return to main list</p>
                <img src='images/arrow.png' alt="Arrow" id="back-btn" class="goback">
               
            </div>`

        for (x=0; x<25; x++) {
            myhtml = myhtml + `
            <div class="shirley">
                <div class="txt">
                    <h3 class="name">${data[x].name}</h3>

                    <img id='temple-art' src="images/shirley-art.png" alt="Pixel art Shirley Temple">
                    <h4 class="date">${data[x].Date}</h4>
                   
                    <div class="info">
                        <h5 class="address">${data[x].address}</h5>
                        <h5 class="citystate">${data[x].City}, ${data[x].State}</h5>
                        <p>${data[x].notes}</p>
                    </div>
                </div>

                 <div class="cherry">
                    ${data[x].cherries} cherries
                </div>

                <div class="rate" id="${data[x].nomer}">
                    <h3 id="${data[x].id}" class="rateData">${data[x].rate}</h3>
                    <script>
                            $.getJSON('data/shirleys.json', function(data) { 
                            let measureRate = $('#${data[x].id}').html() 
                            let measureParsed = parseInt(measureRate)
               
                            console.log(measureParsed)

                            if (measureParsed >= 7) {
                                $('#${data[x].nomer}').css("background-color", "#83D071")
                            } else if (measureParsed > 4 && measureParsed <= 6) {
                                 $('#${data[x].nomer}').css("background-color", "#C6A800")
                             } else if (measureParsed <= 4) {
                              $('#${data[x].nomer}').css("background-color", "#CD233C")
                             }
        })
                    </script>
                </div>
                <textarea id='gren'>${data[x].gren}</textarea>
                <textarea id='measure-rate'>${data[x].rate}</textarea>
            </div>`
            
        }


        // <script> 
        //             measureRate = document.getElementsByClassName("rateData")[x];
        //             console.log(measureRate);

        //             if (measureRate > 7){
        //             document.getElementById("rate").css.backgroundColor("#0000ff");
        //             }
        //         </script>

        $("#shirleylist").html(myhtml)

        let shirleyClick = $(".shirley").click(function(){
            $(this).removeClass('shirley')
            $(this).addClass('shirleyshow')
            $('.shirley').addClass('shirleyhide')
            $('#return').removeClass('hidden')
            $('.balance-bar').addClass('barshow')
            $('.img').addClass('hidden')
            $('#bighead').html("Shirley Selected")

            let cherryAmount = $(this).find('.cherry').html()
            let cherryParse = parseInt(cherryAmount)
            console.log(cherryAmount)
            console.log(cherryParse)

            if (cherryParse === 0) {
                $('#warning').addClass('activewarning')
                console.log('no cherries')
                $('#bighead').html("Watch out!")

                let cherryId = $(this).find('.name').html()
                if (cherryId === `DIY Shirley Temple in a Bear Cup`) {
                    console.log('meow')
                    $('#warnp').html("This one has no cherries. But I made it, so give me a little grace here. Please.")
                    }
                }

           
            let grenBalance = $(this).find('#gren').val()
            let grenParsed = parseInt(grenBalance)
            console.log(grenParsed)

            if (grenParsed > 10 && grenParsed < 25) {
                $('#body').addClass('med')
            }

            if (grenParsed <= 10) {
                $('#body').addClass('lite')
                $('.goback').css("color", "black")
                console.log('working!')
            }

            $('.balance-bar').hover(function() {
                console.log("meow")
                $('#grentitle').html(grenBalance + `%`)
                $('#grentitle').addClass('titleactive')
            }, function() {
                $('#grentitle').html('')
                $('#grentitle').removeClass('titleactive')
            })
        });


        $('#yes').click(function () {
            $('#warning').removeClass('activewarning')
            $('#bighead').html("Shirley Selected")
            
        })

        $('#no').click(function () {
            $('.shirleyshow').addClass('shirley')
            $('.shirleyshow').removeClass('shirleyshow')
            $('.shirleyhide').removeClass('shirleyhide')
            $('#return').addClass('hidden')
            $('.balance-bar').removeClass('barshow')
            $('#warning').removeClass('activewarning')
            $('#body').removeClass()
            $('#bighead').html("Shirley Temple Select")
            $('.img').removeClass('hidden')
        })

        $('#return').click(function() {
            $('.shirleyshow').addClass('shirley')
            $('.shirleyshow').removeClass('shirleyshow')
            $('.shirleyhide').removeClass('shirleyhide')
            $('#return').addClass('hidden')
            $('.balance-bar').removeClass('barshow')
            $('#body').removeClass()
            $('#bighead').html("Shirley Temple Select")
            $('.img').removeClass('hidden')
        })
    }); 
});



