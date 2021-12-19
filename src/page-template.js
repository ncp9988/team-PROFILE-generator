return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>My Team</title>
</head>

<body>
    <header>My Team</header>
    <section class="row">
        <div class="card col-6 col-md-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${managerName}</h5>
                <p class="card-text">ICON MANAGER</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${managerId}</li>
                <li class="list-group-item">Email:<a href="mailto:${EMAIL HERE}">${managerEmail}</a></li>
    < li class="list-group-item" > Office Number:${ managerOffice }</li >
            </ul >
        </div >
        <div class="card col-6 col-md-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineerName}</h5>
                <p class="card-text">ICON ENGINEER</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${engineerId}</li>
                <li class="list-group-item">Email:<a href="mailto:${EMAIL HERE}">${engineerEmail}</a></li>
                <li class="list-group-item">Github:<a href="https://github.com/${GITHUB}">${engineerGithub}</a></li>
            </ul>
        </div>
        <div class="card col-6 col-md-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${internName}</h5>
                <p class="card-text">ICON INTERN</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${internId}</li>
                <li class="list-group-item">Email:<a href="mailto:${EMAIL HERE}">${internEmail}</a></li>
                <li class="list-group-item">School:${internSchool}</li>
            </ul>
        </div>


    </section >
</body >

</html >
    `