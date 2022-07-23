function listJobs(){ 
    
    const elements = document.querySelectorAll('.je-2 .job-wrap');
    let jobs = [];
    
    for (mainElement of elements){
  
        let url = mainElement.querySelector('.job-element').attributes.onclick.value.split("'")[1];
        //console.log(url);
        let title = mainElement.querySelector('.job-element .inner-job-element .job-title').innerText;
        //console.log(title);
        let locate = mainElement.querySelector('.job-element .inner-job-element .job-location').innerText;
        //console.log(locate);
        let data = {};

        data.title = title;
        data.locate = locate;
        data.url = url;
        jobs.push(data)
    }
    
    return jobs;
}

(function main() {
    console.clear();
    const jobs = listJobs();
    console.table(jobs);
})();