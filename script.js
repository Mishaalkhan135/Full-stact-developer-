/*const square = number => number * number;
console.log(square(5));
const jobs = [
    {id: 1, isactive: true },
    {id: 2, isactive: true },
    {id: 3, isactive: false },
];
const activeJobs = jobs.filter(function(job){return job.isactive;});
const activeJobs = jobs.filter(job => job.isactive);
console.log(activeJobs);*/

const colors = ['white','green','blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);