function usernamevalidate(value) {
    if (value == '') {
        return "please fill the username field...";
    } else if ((value.length <= 3) || (value.length > 20)) {
        return "username length must between 3-20...";
    } else if (!isNaN(value)) {
        return "please write a valid name...";
    }
    return null;
}
$.fn.myuser = function() {
    this.each(function(index, el) {
        var $this = $(this);
        var $msg = $('#UserName');
        $this.on('blur input', function(e) {
            var val = $this.val();
            var err = usernamevalidate(val);
            $msg.text(err);
        });
    });
};


function emailvalidate(value) {
    if (value == '') {
        return 'please fill ur E-mail field...'
    } else if (value.indexOf('@') <= 0) {
        return ' @ invalid position...';
    } else if ((value.charAt(value.length - 4) != '.') && (value.charAt(value.length - 3)) != '.') {
        return '. invalid position...';
    }
    return null;

}
$.fn.myemail = function(argument) {
    this.each(function(index, el) {
        var $this = $(this);
        var msg = $('#mailtext');
        $this.on('input blur', function(event) {
            var val = $this.val();
            var err = emailvalidate(val);
            msg.text(err);
        });
    });
}


function passwordvalid(value) {
    if (value == '') {
        return 'enter password.'
    } else if ((value.length < 5) || (value.length > 12)) {
        return 'password length must be 5-12'
    } else if (value.length == 6) {
        return 'good';
    } else if (value.length == 9) {
        return 'strong';
    } else if (value.length == 12) {
        return 'best'
    }
    return null;
}
$.fn.mypass = function(argument) {
    var $this = $(this);
    var pass = $('#pswrdtext ');
    $this.on('input blur', function(event) {
        var val = $this.val();
        var err = passwordvalid(val);
        pass.text(err)
    });
}


function confirmPass(value, prev) {
    if (value, prev == '') {
        return 'please write the same password'
    } else if (value != prev) {
        return 'write the same password.'
    }
    return null;
}
$.fn.confirm = function(argument) {
    var $this = $(this);
    var $msg = $('#Cnpswrdtext');
    $this.on('blur input', function(argument) {
        var prev = $('#pswrd').val();
        var val = $this.val();
        var err = confirmPass(val, prev);
        $msg.text(err);

    })
}


function mobilenum(val) {
    if (val == '') {
        return 'please enter ur mobile number.'
    } else if (isNaN(val)) {
        return 'user must be write in digits not in characters'
    } else if ((val.length < 10) || (val.length > 10)) {
        return 'mobile no. must be of 10 digits...'
    }
    return null;
}
$.fn.mynum = function(argument) {
    $this = $(this);
    var num = $('#mobilenotext');
    $this.on('input blur', function(event) {
        var val = $this.val();
        var err = mobilenum(val);
        num.text(err);
    });
}


function addvalid(val) {
    if ((val.length <= 10) || (val.length > 30)) {
        return 'address must be between 10-30 characters.'
    }
    return null;
}
$.fn.myaddres = function(argument) {
    var $this = $(this);
    var msg = $('#addresstext');
    $this.on('blur input', function(event) {
        var val = $this.val();
        var err = addvalid(val);
        msg.text(err);
    });
}