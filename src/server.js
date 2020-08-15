const proffys = [
    {
        name: "Gustavo Pilan",
        avatar: "https://scontent.fssz1-1.fna.fbcdn.net/v/t1.0-9/45965152_1324986480971156_7640352928133283840_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=qiFeItcU-sMAX_PIPdy&_nc_ht=scontent.fssz1-1.fna&oh=2fb7aecb89fb774b35b7424ab49ee204&oe=5F5BCE38",
        whatsapp: "89124812414812", 
        bio: "Louco por Física", 
        subject: "Física", 
        cost: "20,00", 
        weekday: [0], 
        time_form: [720],
        time_to: [1220]
    },

    {
        name: "Victor Manoel",
        avatar: "https://scontent.fssz1-1.fna.fbcdn.net/v/t31.0-8/26198644_1331228256981358_5097978535853054472_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=VZj9bdzPHMEAX-yw_aC&_nc_ht=scontent.fssz1-1.fna&oh=e3c9d4c1839661bc281e805d83e36f11&oe=5F5F687D",
        whatsapp: "11 98248-2561", 
        bio: "Especialista em matemática", 
        subject: "Matemática", 
        cost: "20,00", 
        weekday: [0], 
        time_form: [720],
        time_to: [1220]
    },

    {
        name: "Vinicius Lozano",
        avatar: "https://avatars1.githubusercontent.com/u/65923394?s=460&u=056c45ae7da7cb6bb9553b34fbb41550675d7a98&v=4",
        whatsapp: "89124812414812", 
        bio: "Louco por explosões", 
        subject: "Química", 
        cost: "20,00", 
        weekday: [0], 
        time_form: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades

function getSubject(subjectNumber){
    const position = + subjectNumber - 1
    return subjects[position]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res){
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {

        data.subject = getSubject(data.subject)

        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

//servidor
const express = require('express')
const server = express()


//engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configurar scripts
server.use(express.static("public"))
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//porta
.listen(5500)
