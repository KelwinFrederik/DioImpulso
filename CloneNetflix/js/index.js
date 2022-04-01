const assunto = {
    REC: "recomendado",
    NEG: "negócios",
    SAU: "saude",
    AUT: "autoconhecimento"
}

const podcast = [
    {
        img:"Assets/AllIn.jpg",
        autor:"Jason, Sacks & Friedberg",
        titulo:"All-In",
        assuntoCod: assunto.REC,
        desc:"Industry veterans, degenerate gamblers & besties Chamath Palihapitiya, Jason Calacanis, David Sacks & David Friedberg cover all things economic, tech, political, social & poker."
    },
    {
        img:"Assets/MindeSetMentor.jpg",
        autor:"Rob Dial and Kast Media",
        titulo:"The Mindset Mentor",
        assuntoCod: assunto.REC,
        desc:"The Mindset Mentor™ podcast is designed for anyone desiring motivation, direction, and focus in life. Host Rob Dial has amassed a passionate following of over 3 million social media followers, including business professionals, entrepreneurs, and small business owners with his expertise and passion for helping motivate people to become the best version of themselves. In this podcast, Rob blends neurology, neurobiology, psychology, early childhood development, cognitive behavioral therapy so that you can understand the way your brain and body work together, because when you understand yourself, it makes it much easier to make a plan to change and succeed."
    },
    {
        img:"Assets/reinventar.png",
        autor:"Sodexo",
        titulo:"Reinventar, ressignificar, recomeçar",
        assuntoCod: assunto.AUT,
        desc:"Estamos encerrando um ano de muitas mudanças e iniciando um novo ciclo que promete ser diferente de tudo que já vivemos até então. Para isso, nada melhor do que começar pela reorganização. Colocar tudo em ordem é o pontapé inicial perfeito para que seu 2021 seja mais leve, tranquilo e sem preocupações. Neste podcast, conversamos com a Helena Galante, criadora do podcast Jornada da Calma, editora da revista Veja e colunista da rádio CBN São Paulo."
    },
    {
        img:"Assets/Jornada.jpg",
        autor:"Helena Galante",
        titulo:"Jornada da Calma",
        assuntoCod: assunto.AUT,
        desc:"Toda segunda-feira, bem cedinho Helena Galante conversa com quem está disposto a encontrar caminhos para trazer mais serenidade ao dia a dia."
    },
    {
        img:"Assets/autoconciente.png",
        autor:"B9, Regina Giannetti",
        titulo:"Autoconsciente",
        assuntoCod: assunto.AUT,
        desc:"Este é um podcast que entende você, para você entender melhor sua mente e emoções. Para ter uma relação mais leve consigo mesmo, baixando o tom da autocobrança e da autocrítica que ecoam na cabeça. Para que possa encontrar, dentro de você, a paz que está tão difícil de encontrar no mundo. Autoconsciente é um bom lugar para se estar nestes nossos tempos conturbados. Seus episódios retratam situações que todos nós vivemos, com uma abordagem esclarecedora, acolhedora, que reenergiza. Mais do que um conteúdo, você encontra aqui uma experiência pacificadora."
    },
    {
        img:"Assets/DarknetDiaries.jpg",
        autor:"Jack Rhysider",
        titulo:"Darknet Diaries",
        assuntoCod: assunto.REC,
        desc:"Explore true stories of the dark side of the Internet with host Jack Rhysider as he takes you on a journey through the chilling world of hacking, data breaches, and cyber crime."
    },
    {
        img:"Assets/Gaana.jpg",
        titulo:"Gaana Music",
        autor:"Urna Choudhary",
        assuntoCod: assunto.REC,
        desc:"Listen to Gaana Music podcast audio show. Listen only on Hubhopper."
    },
    {
        img:"Assets/LexFridman.jpg",
        titulo:"Lex Fridman Podcast",
        autor:"Lex Fridman",
        assuntoCod: assunto.REC,
        desc:"Conversations about science, technology, history, philosophy and the nature of intelligence, consciousness, love, and power. Lex is an AI researcher at MIT and beyond."
    },
    {
        img:"Assets/MakeMeSmart.png",
        titulo:"Make Me Smart",
        autor:"Marketplace",
        assuntoCod: assunto.NEG,
        desc:"Each weekday, Marketplace’s Kai Ryssdal and Kimberly Adams make today make sense. Along with our supersmart listeners, we break down happenings in tech, the economy and culture. Every Tuesday we bring on a guest to dive deeper into one important topic. Because none of us is as smart as all of us."
    },
    {
        img:"Assets/Pivotjpg.jpg",
        titulo:"Pivot",
        autor:"New York Magazine",
        assuntoCod: assunto.NEG,
        desc:"Every Tuesday and Friday, tech journalist Kara Swisher and NYU Professor Scott Galloway offer sharp, unfiltered insights into the biggest stories in tech, business, and politics. They make bold predictions, pick winners and losers, and bicker and banter like no one else. After all, with great power comes great scrutiny. From New York Magazine and the Vox Media Podcast Network."
    },
    {
        img:"Assets/Talks.png",
        titulo:"Mayo Clinic Talks",
        autor:"Mayo Clinic",
        assuntoCod: assunto.SAU,
        desc:"Timely consultations relevant for family medicine, primary care, and general internal medicine topics for physicians, nurse practitioners, physician assistants, and residents. Offering CME credit for most episodes at https://ce.mayo.edu/podcast."
    },
    {
        img:"Assets/Ausculta.jpg",
        titulo:"Ausculta Aqui",
        autor:"SanarFlix",
        assuntoCod: assunto.SAU,
        desc:"O Ausculta aqui, o Podcast do SanarFlix, chegou para trazer para você uma experiência incrível! Aqui, você vai encontrar: - Discussão de casos clínicos; - Entrevistas com grandes nomes da Medicina - Dicas de como sobreviver ao dia dia do estudante de medicina - Papos sobre carreira, futuro da medicina e muito mais! Fique ligado no Ausculta Aqui, sua nova conexão com o SanarFlix, o melhor amigo do estudante de medicina."
    },
    {
        img:"Assets/jaleco.png",
        titulo:"De papo com Jaleco",
        autor:"Bryan Porphirio",
        assuntoCod: assunto.SAU,
        desc:"Graduandos de Biofísica e Nanotecnologia da UFRJ"
    },
    {
        img:"Assets/ReplyAll.jpg",
        titulo:"Reply All",
        autor:"Gimlet",
        assuntoCod: assunto.REC,
        desc:"\"A podcast about the internet' that is actually an unfailingly original exploration of modern life and how to survive it.\" - The Guardian. Hosted by Alex Goldman and Emmanuel Dzotsi from Gimlet."
    },
    {
        img:"Assets/TechStuff.jpg",
        titulo:"TechStuff",
        autor:"iHeartPodcasts",
        assuntoCod: assunto.REC,
        desc:"TechStuff is a show about technology. And it’s not just how technology works. Join host Jonathan Strickland as he explores the people behind the tech, the companies that market it and how technology affects our lives and culture."
    },
    {
        img:"Assets/TheDailyjpg.jpg",
        titulo:"The Daily",
        autor:"The New York Times",
        assuntoCod: assunto.REC,
        desc:"This is what the news should sound like. The biggest stories of our time, told by the best journalists in the world. Hosted by Michael Barbaro. Twenty minutes a day, five days a week, ready by 6 a.m."
    },
    {
        img:"Assets/thisAmericamLife.png",
        titulo:"This American Life",
        autor:"This American Life",
        assuntoCod: assunto.REC,
        desc:"This American Life is a weekly public radio show, heard by 2.2 million people on more than 500 stations. Another 2.5 million people download the weekly podcast. It is hosted by Ira Glass, produced in collaboration with Chicago Public Media, delivered to stations by PRX The Public Radio Exchange, and has won all of the major broadcasting awards."
    },
    {
        img:"Assets/PlanetMonkey.png",
        titulo:"Planet Money",
        autor:"NPR",
        assuntoCod: assunto.NEG,
        desc:"The economy explained. Imagine you could call up a friend and say, \"Meet me at the bar and tell me what's going on with the economy.\" Now imagine that's actually a fun evening. Want to really power up your fandom? Try Planet Money Plus. Your subscription supports the show and unlocks a sponsor-free feed. Learn more at plus.npr.org/planetmoney"
    },
    {
        img:"Assets/TheIndicator.png",
        titulo:"The Indicator",
        autor:"NPR",
        assuntoCod: assunto.NEG,
        desc:"A little show about big ideas. From the people who make Planet Money, The Indicator helps you make sense of what's happening today. It's a quick hit of insight into work, business, the economy, and everything else. Listen weekday afternoons."
    },
    {
        img:"Assets/theRamsey.jpg",
        titulo:"The Ramsey Show",
        autor:"Ramsey Network",
        assuntoCod: assunto.NEG,
        desc:"Take control of your life and money once and for all. The Ramsey Show offers up straight talk from Dave Ramsey and his team of co-hosts. Millions listen in as callers from all walks of life learn how to get out of debt and start building for the future."
    },
    {
        img:"Assets/onPurpose.jpg",
        titulo:"On Purpose",
        autor:"Jay Shetty",
        assuntoCod: assunto.NEG,
        desc:"My name is Jay Shetty, and my purpose is to make wisdom go viral. I’m fortunate to have fascinating conversations with the most insightful people in the world, and on my podcast, I’m sharing those conversation with you. New episodes Mondays and Fridays. Listen anywhere you get your podcasts, and please rate and review the podcast if you enjoy it."
    },
    {
        img:"Assets/estilosaudavel.jpg",
        titulo:"ESTILO SAUDÁVEL",
        autor:"joanina procida",
        assuntoCod: assunto.SAU,
        desc:"Estilo Saudável é um podcast sobre saúde e qualidade de vida. Especialistas no assunto vão nos ajudar a entender como podemos viver de maneira simples, prevenir problemas de saúde sem muitas complicações. Simplesmente viver e ser feliz."
    },
    {
        img:"Assets/DozeCast.jpg",
        titulo:"DozeCast - Cardiologia ",
        autor:"Doze Por Oito",
        assuntoCod: assunto.SAU,
        desc:"Sejam bem-vindos ao Podcast da Doze Por Oito! Destinado a esmiuçar as nuances da Cardiologia e Medicina! De forma descontraída e didática, relembraremos junto com você aquilo que ja é sedimentado em nossa especialidade, mas acima disso, debateremos tudo aquilo que ainda nao é consenso entre os especialistas!"
    },
    {
        img:"Assets/hackmed.jpg",
        titulo:"Hackmed Podcast",
        autor:"Hackmed Podcast",
        assuntoCod: assunto.SAU,
        desc:"Você já está careca de saber que a inovação abre portas para as oportunidades de transformação e nós aqui do Hackmed somos defensores dessa ideia."
    },
    {
        img:"Assets/zencast.jpg",
        titulo:"Zencast",
        autor:"Zenklub",
        assuntoCod: assunto.AUT,
        desc:"Zencast é o podcast do Zenklub, maior plataforma de cuidado emocional do Brasil que oferece serviços e conteúdos de saúde emocional, bem-estar e desenvolvimento pessoal. Toda terça-feira a jornalista Izabella Camargo recebe um convidado diferente para conversas que vão te fazer pensar melhor, sentir melhor, decidir e assim, viver melhor."
    },
    {
        img:"Assets/MeuInconsciente.png",
        titulo:"Meu Inconsciente Coletivo",
        autor:"Folha de S. Paulo",
        assuntoCod: assunto.AUT,
        desc:"O que os melhores psicanalistas do país têm a dizer sobre remédios, maternidade, depressão, síndrome do impostor e fetiches estranhos? No podcast \"Meu Inconsciente Coletivo”, a escritora e colunista da Folha, Tati Bernardi, abre ao público alguns temas recorrentes em suas sessões de terapia. Nos episódios, as neuroses da paciente são as mesmas, mas o analista muda a cada sessão. O \"Meu Inconsciente Coletivo\" está nos principais agregadores de podcast e tem novos episódios todas as sextas."
    },
    {
        img:"Assets/toconciente.jpg",
        titulo:"Autoconsciência",
        autor:"Isabel Vesco",
        assuntoCod: assunto.AUT,
        desc:"É a capacidade de olhar para si mesmo com honestidade e isenção, sem julgamentos ou autocrítica; é a capacidade de se reconhecer por inteiro, de identificar  todos os defeitos e qualidades, e todo o bem e todo o mal que nos compõem."
    }
]

var podcastSelected = podcast[0];

function setHowMainPodcast(mainPodcast){
    if(!mainPodcast || mainPodcast == podcastSelected)
        return;
    
    podcastSelected = mainPodcast;

    $("h3#titulo").text(podcastSelected.titulo);
    $("#autorPodcast").text(podcastSelected.autor);
    $("p.descricao").text(podcastSelected.desc);
    $('div#imagemPodCast').css({ backgroundImage: 'url(../'+ podcastSelected.img +')'});
}

$( document ).ready(function() {

    podcast.forEach( podcas => {
        var htmlAppend = "\n <div class=\"owlItemTemplate\">\n <img src=\""+ podcas.img +"\">\n <p>\n "+ podcas.titulo +"\n <br>\n <small>"+ podcas.autor +"</small>\n </p>\n\n </div>\n ";

        switch(podcas.assuntoCod){
            case assunto.REC:
                $('div#recomendadosCarousel').append(htmlAppend);
                break;
            case assunto.NEG:
                $('div#negociosCarousel').append(htmlAppend);
                break;
            case assunto.SAU:
                $('div#saudeCarousel').append(htmlAppend);
                break;
            case assunto.AUT:
                $('div#autoconhecimentoCrousel').append(htmlAppend);
                break;
        }
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin:0,
        nav: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });
    
    $('.owlItemTemplate').on('click', (event) => { 
        setHowMainPodcast(podcast.find( x => event.currentTarget.innerText.includes(x.titulo))) 
    });
});
