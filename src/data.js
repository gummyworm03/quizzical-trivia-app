//test data to create static app
const data = {
    response_code: 0,
    results: [
        {
            category: "History",
            type: "multiple",
            difficulty: "medium",
            question: "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
            correct_answer: "55",
            incorrect_answers: ["50", "60", "54"]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "medium",
            question: "In what Half-Life expansion can you find Gordon&#039;s picture in an &quot;Employee of the Month&quot; picture frame?",
            correct_answer: "Half-Life: Opposing Force",
            incorrect_answers: ["Half-Life: Blue Shift", "Half-Life: Decay", "They Hunger"]
        },
        {
            category: "Entertainment: Video Games",
            type: "multiple",
            difficulty: "easy",
            question: "In &quot;Mario &amp; Sonic at the Olympic Games&quot;, characters are split into how many types?",
            correct_answer: "4",
            incorrect_answers: ["6", "5", "3"]
        },
        {
            category: "Entertainment: Television",
            type: "multiple",
            difficulty: "hard",
            question: "What is the Klingon&#039;s afterlife called?",
            correct_answer: "Sto-vo-kor",
            incorrect_answers: ["Valhalla", "Karon&#039;gahk", "New Jersey"]
        },
        {
            category: "Science: Computers",
            type: "multiple",
            difficulty: "hard",
            question: "According to DeMorgan&#039;s Theorem, the Boolean expression (AB)&#039; is equivalent to:",
            correct_answer: "A&#039; + B&#039;",
            incorrect_answers: ["A&#039;B + B&#039;A", "A&#039;B&#039;", "AB&#039; + AB"]
        }
    ]
}

export default data;