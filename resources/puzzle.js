function do_submit()
{
    var code = document.getElementById('answer').value;
    if(code == null || code == '') return false;
    if(code == 'Pr0t3ct!on#cyber_security@12*12.2011+')
    {
        this.document.location = './youdidit.html'
        return true;
    }
    return false;
}