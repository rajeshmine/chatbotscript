let chatbot = ` <div class="outerchatbotdiv">
<div class="topchatdiv">
    <p class="pad10">
        <img src="./../../assets/images/BOT-Logo.png">
        Pybotmaker
        <i onclick="chatbotclose()" class="far fa-times-circle"></i>
    </p>
</div>
<div class="centerchatdiv">
    <div class="leftsidemsgdiv">
        <span class="leftsidemsg">
            Welcome to Pybotmaker.
        </span>
    </div>
    <div class="rightsidemsgdiv">
        <span class="rightsidemsg">
            Hi
        </span>
    </div>
    <div class="leftsidemsgdiv">
        <span class="leftsidemsg">
            Welcome to Pybotmaker.
        </span>
    </div>
    <div class="rightsidemsgdiv">
        <span class="rightsidemsg">
            Hi
        </span>
    </div>
    <div class="leftsidemsgdiv">
        <span class="leftsidemsg">
            Welcome to Pybotmaker.
        </span>
    </div>
    <div class="rightsidemsgdiv">
        <span class="rightsidemsg">
            Hi
        </span>
    </div>
    <div class="leftsidemsgdiv">
        <span class="leftsidemsg">
            Welcome to Pybotmaker.
        </span>
    </div>
    <div class="rightsidemsgdiv">
        <span class="rightsidemsg">
            Hi
        </span>
    </div>
</div>
<div class="bottomchatdiv">
    <input type="text" class="form-control inputstyle" placeholder="Try it Now ... ">      
</div>

</div>
<div class="chatbotwithbgdiv" onclick="chatbotopen()">
<img src="./../../assets/images/chatbotwithbg.png">
</div>`;

$(document).ready(function () {
    $('body').append(chatbot);
    $('.chatbotwithbgdiv').css({
        'position': 'fixed',
        'bottom': '10px',
        'right': '10px',
        'z-index': '4',
        'animation': 'pulse1 1.5s infinite',
        'box-shadow': '0 0 0 0 rgba(#5a99d4, .5)'
    });
    $('.chatbotwithbgdiv img').css({
        'width': '60px'
    });
    $('.outerchatbotdiv').css({
        'background': '#fff',
        'z-index': '4',
        'width': '300px',
        'position': 'fixed',
        'bottom': '20px',
        'right': '20px',
        'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)',
        'border-radius': '7px'
    });
    $('.topchatdiv').css({
        'border-bottom': '1px solid #ddd'
    });

    $('.topchatdiv p').css({
        'font-size': '15px',
        'font-weight': '600',
        'text-transform': 'uppercase',
        'letter-spacing': '1px'
    });

    $('.topchatdiv img').css({
        'width': '40px'
    });
    $('.topchatdiv i').css({
        'float': 'right',
        'padding': '10px',
        'cursor': 'pointer',
        'border-radius':'7px 7px 0 0'
    });
    $('.centerchatdiv').css({
        'padding': '10px',
        'height': '380px',
        'background': 'url(./../../assets/images/chatinnerbg.jpg) center/cover',
        'overflow': 'auto',
        'overflow-x': 'hidden'
    });
    
    $('.centerchatdiv::-webkit-scrollbar').css({
        'width': '0px'
    });
    
    $('.bottomchatdiv input').css({
        'outline': 'none',
        'border': '0',
        'border-radius': '0 0 7px 7px'
    });
    
    $('.leftsidemsg').css({
        'padding': '7px 10px',
        'border-radius': '0 10px 0px 10px',
        'background': '#eff5f7',
        'margin': '5px',
        'float': 'left'
    });
    
    $('.rightsidemsg').css({
        'padding': '7px 10px',
        'border-radius': '10px 0px 10px 0px',
        'background':'#3F51B5',
        'margin': '5px',
        'color': '#fff',
        'float': 'right'
    });
    
    $('.leftsidemsgdiv').css({
        'margin': '10px',
        'display': 'flex',
        'width': '100%'
    });
    
    $('.rightsidemsgdiv').css({
        'margin': '10px',
        'width': '100%',
        'display': 'block'
    });
    
    $('.pad10').css({
        'padding':'10px '
    })
    $('p').css({
        'margin':'0'
    });
    $('.outerchatbotdiv').hide();
});

function chatbotopen() {
    $('.chatbotwithbgdiv').hide();
    $('.outerchatbotdiv').slideDown();
    chatscrollbtm();
}
function chatbotclose() {
    $('.chatbotwithbgdiv').show();
    $('.outerchatbotdiv').slideUp();
}
function chatscrollbtm() {
    var wtf = $('.centerchatdiv');
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
}
