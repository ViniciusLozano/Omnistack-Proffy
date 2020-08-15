const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    //inserir dados

   proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89124812414812", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas emlaboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passarampor uma das minhas explosões",
   }
    
   classValue = {
    subject: "Química", 
    cost: "20",
   }

   classScheduleValues = [
       {
        weekday: "1", 
        time_from: "720",
        time_to: "1220"
       },
       {
        weekday: "0", 
        time_from: "520",
        time_to: "1220"
       }
   ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //consultar dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes do professor e os dados
   const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
   `)
   //console.log(selectClassesAndProffys)

   // o horario que a pessoa trabalha
   // o horario do time_from
   // time_to
   const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
       
   `)

   console.log(selectClassesSchedules)

})