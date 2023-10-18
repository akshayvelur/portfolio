$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbwRDPMwwB1ChCWsk_nbXYTYdadSLuWxir0CePtGIURWD1HIuOc_RqgdpfP6rQbDtu6L/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            document.getElementById("success-message").innerHTML="Submitted Successfully..!"
            
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})