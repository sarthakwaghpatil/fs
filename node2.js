function delayMessage(callback)
{
    setTimeout(()=>{
        console.log('DelayMessage');
    },2);
}
function handleMessage(message)
{
    console.log('recived message');

}
delayMessage(handleMessage);