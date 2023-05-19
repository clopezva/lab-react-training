function translate(lang){

    let greeting = "";

    if (lang === "en"){
        greeting = "Hello"
    }else if (lang === "fr"){
        greeting = "Bonjour"
    }else if(lang === "de"){
        greeting = "Hallo"
    }else if (lang === "es"){
        greeting = "Hola"
    }else if(lang === "kr"){
        greeting = "아녕하세요"
    }

    return greeting;
}

function Greeting({lang, children}){

    const greeting = translate(lang)
    
    return (
        <div className="section-style">
        <h3>{greeting} {children}!</h3>
        </div>
    )

}

export default Greeting