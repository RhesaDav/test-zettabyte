// Expected Result :
// [
//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },
//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },
//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.

const source = [
    {
        id: "1",
        data: {
            first_name: "Rian",
            last_name: "Nugraha",
        },
        school: {
            id: "1",
            data: "PLMK-JKT",
        },
    },
    {
        id: "2",
        full_name: "Ari Santoso",
        school: {
            id: "1",
            short_name: "GRSR",
            data: "JKT",
        },
    },
    {
        id: "3",
        data: {
            first_name: "Rahman",
            last_name: "Sunggara",
        },
        school: {
            id: "1",
            short_name: "GELM",
            data: "JKT",
        },
    },
    {
        id: "4",
        data: {
            first_name: "Rian",
            last_name: "Nugraha",
        },
        school: {
            id: "2",
            data: "PLMK-BDG",
        },
    },
];

function result(num) {
  return num.map(el => {
    return {
      name : el.full_name ? el.full_name : el.data.first_name + " " + el.data.last_name,
      school_name : el.school.short_name? el.school.short_name + " " + el.school.data : el.school.data
    }
  })
}

console.log(result(source));
