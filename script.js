function currencyConverter(valNum){
    if(converter.dolari.value <= 0)
    window.alert("Unesite vrijednost vecu od 0");
    else {
    
    document.getElementById("prodajni_aud").value = (valNum/4.590561).toFixed(4);
    document.getElementById("prodajni_huf").value = (valNum/2.221682).toFixed(4);
    document.getElementById("prodajni_chf").value = (valNum/6.832425).toFixed(4);
    document.getElementById("prodajni_bam").value = (valNum/3.797635).toFixed(4);
    document.getElementById("prodajni_gbp").value = (valNum/8.370933).toFixed(4);

    document.getElementById("srednji_aud").value = (valNum/4.576831).toFixed(4);
    document.getElementById("srednji_huf").value = (valNum/2.215037).toFixed(4);
    document.getElementById("srednji_chf").value = (valNum/6.811989).toFixed(4);
    document.getElementById("srednji_bam").value = (valNum/3.786276).toFixed(4);
    document.getElementById("srednji_gbp").value = (valNum/8.345895).toFixed(4);

    document.getElementById("kupovni_aud").value = (valNum/4.563101).toFixed(4);
    document.getElementById("kupovni_huf").value = (valNum/2.208392).toFixed(4);
    document.getElementById("kupovni_chf").value = (valNum/6.791553).toFixed(4);
    document.getElementById("kupovni_bam").value = (valNum/3.774917).toFixed(4);
    document.getElementById("kupovni_gbp").value = (valNum/8.320857).toFixed(4);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    let url = "tecaj.xml";
    fetch(url)
    .then(response=>response.text())
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, "application/xml");
        document.getElementById('valuta').textContent = data;
        valutaList(xml);
    });
})

function valutaList(x){
    let list = document.getElementById('valuta');
    let item = x.getElementsByTagName('valuta');
    for(let i=0; i<item.length; i++){
        let li = document.createElement('li');
        let valuta = item[i].firstChild;
        li.textContent = valuta;
        list.appendChild(li);
    }
}




    