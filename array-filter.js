    let people = [
        {
            name: "Andi",
            gender: "Male"
        },
        {
            name: "Siti",
            gender: "Female"
        },
        {
            name: "Cindy",
            gender: "Female"
        }
    ];

    let data = people.filter(people => {
        return people.gender === "Female"; // yang di filter adalah data yg memenuhi karakter "Female" yg akan tampil
    });

    console.log(data);