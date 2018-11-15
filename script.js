var eventType = prompt("What type of event is it?")
var tempFahr = prompt("How many degrees is it?");
var result;

if(eventType === "casual" && tempFahr < 54){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear something comfy and a coat.`
    console.log(result);
} else if (eventType === "casual" && tempFahr >= 54 && eventType === "casual" && tempFahr <= 70){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear something comfy and a jacket.`
    console.log(result);
} else if (eventType === "casual" && tempFahr > 70){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear something comfy and no jacket.`
    console.log(result);
} else if (eventType === "semi-formal" && tempFahr <54){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a polo and a coat.`
    console.log(result);
}else if (eventType === "semi-formal" && tempFahr >= 54 && eventType === "casual" && tempFahr <= 70){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a polo and a jacket.`
    console.log(result);
}else if(eventType === "semi-formal" && tempFahr > 70){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a polo and no jacket.`
    console.log(result);
}if(eventType === "formal" && tempFahr < 54){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a suit and a coat.`
    console.log(result);
}else if (eventType === "formal" && tempFahr >= 54 && eventType === "casual" && tempFahr <= 70){
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a suit and a jacket.`
    console.log(result);
}else (eventType === "formal" && tempFahr > 70);
    result = `Since it is ${tempFahr} degrees and you are going to a ${eventType} event. You should wear a suit and no jacket.`
    console.log(result);


    


