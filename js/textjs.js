const faqCopy = [
    {
        title : "NCS 프론트앤드과정 훈련중 가장 힘들었던 점은?",
        view : `단기간 안에 전문기술을 훈련하다보니 기본이론훈련이 비전공자로서
                이해하기에 너무 생소해서 어려웠습니다. 그 이후 기술도 하나의
                메뉴얼이라는 것을 알고 나니까 재미가 있었습니다.`
    },
    {
        title : "두번째 질문?",
        view : `두번째 질문에 대한 답 / 이전의 업무가 지금 나의 훈련에 미친 영향을 
                긍정적으로 기술해야만 해요.`
    },
    {
        title : "세번째 질문?",
        view : `세번째 질문에 대한 답 / 이전의 업무가 지금 나의 훈련에 미친 영향을 
                긍정적으로 기술해야만 해요.`
    },
]
// $("#accordionExample .accordion-button").eq(0).html(faqCopy[0].title)
// $("#accordionExample .accordion-collapse").eq(0).find(".accordion-body").html(faqCopy[0].view)

const multiDB = [
    {
        h2 : "타이틀에 해당되는 제목을 넣기",
        detail :[
                    {
                        title : "NCS 프론트앤드과정 훈련중 가장 힘들었던 점은?",
                        view : `단기간 안에 전문기술을 훈련하다보니 기본이론훈련이 비전공자로서
                                이해하기에 너무 생소해서 어려웠습니다. 그 이후 기술도 하나의
                                메뉴얼이라는 것을 알고 나니까 재미가 있었습니다.`
                    },
                    {
                        title : "두번째 질문?",
                        view : `두번째 질문에 대한 답 / 이전의 업무가 지금 나의 훈련에 미친 영향을 
                                긍정적으로 기술해야만 해요.`
                    },
                    {
                        title : "세번째 질문?",
                        view : `세번째 질문에 대한 답 / 이전의 업무가 지금 나의 훈련에 미친 영향을 
                                긍정적으로 기술해야만 해요.`
                    },
                ]
    },
    {   h2 : "타이틀에 해당되는 제목을 넣기",
        detail :[
                    {
                        title : "NCS 프론트앤드과정 훈련중 가장 힘들었던 점은?",
                        view : `단기간 안에 전문기술을 훈련하다보니 기본이론훈련이 비전공자로서
                                이해하기에 너무 생소해서 어려웠습니다. 그 이후 기술도 하나의
                                메뉴얼이라는 것을 알고 나니까 재미가 있었습니다.`
                    },
                    {
                        title : "두번째 질문?",
                        view : `두번째 질문에 대한 답 / 이전의 업무가 지금 나의 훈련에 미친 영향을 
                                긍정적으로 기술해야만 해요.`
                    },
                    {
                        title : "세번째 질문?",
                        view : `세번째 질문에 대한 답 / 이전의 업무가 지금 나의 훈련에 미친 영향을 
                                긍정적으로 기술해야만 해요.`
                    },
                ]
    }
]


// let titleSubject = multiDB[1].detail[2].title;
// console.log(`1번 문제 : ${titleSubject}`)
//     titleSubject = multiDB[0].detail[0].view;
// console.log(`2번 문제 : ${titleSubject}`)

// titleSubject = multiDB[0].detail[0].title;
// titleSubject += multiDB[0].detail[1].title;
// titleSubject += multiDB[0].detail[2].title;

// titleSubject += multiDB[1].detail[0].title;
// titleSubject += multiDB[1].detail[1].title;
// titleSubject += multiDB[1].detail[2].title;

// titleSubject = '';

// for(i in multiDB){
//     for(j in multiDB[i].detail){
//         titleSubject += multiDB[i].detail[j].title;
//     }
// }

// console.log(`3번 문제 : ${titleSubject}`)

// for(var i =2; i< 10; i++){
//     console.log(i + '단');
//     for(var j = 1; j< 10; j++){
//         console.log(i + '*' + j + '='+ (i*j));
//     }
// }



for(var i =2; i< 10; i++){
    console.log('<ul>')
    for(var j = 1; j< 10; j++){
        console.log(`t<li> ${i}X${j}=${i*j} </li>`)
    }
    console.log('</ul>')
}