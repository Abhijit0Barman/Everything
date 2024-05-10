const request = require("supertest");
const fs = require("fs");
const os = require("os");
const app = require("../index");

global.score = 1;
beforeAll(() => {
  fs.writeFileSync("./logs.txt", "");
  fs.writeFileSync(
    "db.json",
    JSON.stringify({
      students: [
        {
          id: 1,
          name: "Aman",
          age: 23,
          location: "Pune",
          tickets: [
            {
              ticket_id: 1,
              title: "LMS Issue",
              body: "My LMS is not showing the lectures",
            },
            {
              ticket_id: 2,
              title: "Attendance",
              body: "Even though I have attended the lecture, I am marked absent",
            },
          ],
        },
        {
          id: 501,
          name: "pulkittyagi",
          age: 25,
          location: "Delhi",
          tickets: [
            {
              ticket_id: 20,
              title: "New Ticket",
              body: "Ticket Body",
            },
          ],
        },
      ],
      instructors: [
        {
          id: 1,
          name: "Chunnu",
          age: 45,
          location: "Patna",
          sub: "React",
          exp: 10,
        },
        {
          id: 2,
          name: "Payal",
          age: 32,
          location: "Delhi",
          sub: "Node",
          exp: 4,
        },
        {
          id: 501,
          name: "pulkittyagi",
          age: 25,
          location: "Delhi",
          sub: "Blockchain",
          exp: 4,
        },
      ],
    })
  );
});

// beforeEach(() => {});

describe("Masai Ticketing System", () => {
  it("able to implement GET '/' route", async () => {
    const response = await request(app).get("/");

    expect(response.headers["content-type"]).toBe("text/html; charset=utf-8");
    expect(response.status).toBe(200);
    expect(response.text).toBe("<h1>Welcome to the Home Page</h1>");

    global.score += 1;
  });

  it("able to implement POST '/add/student' route", async () => {
    jest.spyOn(os, "userInfo").mockReturnValueOnce({ uid: "141" });
    jest
      .spyOn(os, "userInfo")
      .mockReturnValueOnce({ username: "spsanchore13" });

    const student = {
      age: 25,
      location: "Rajasthan",
      tickets: [
        {
          ticket_id: "181",
          title: "One Day Sick Leave",
          body: "Due to fever i want to take one day leave",
        },
        {
          ticket_id: "182",
          title: "Two Day Sick Leave",
          body: "Due to fever i want to take one day leave",
        },
      ],
    };

    const response = await request(app)
      .post("/add/student")
      .set("Content-Type", "application/json")
      .send(student);

    expect(response.body).toStrictEqual([
      {
        id: 1,
        name: "Aman",
        age: 23,
        location: "Pune",
        tickets: [
          {
            ticket_id: 1,
            title: "LMS Issue",
            body: "My LMS is not showing the lectures",
          },
          {
            ticket_id: 2,
            title: "Attendance",
            body: "Even though I have attended the lecture, I am marked absent",
          },
        ],
      },
      {
        id: 501,
        name: "pulkittyagi",
        age: 25,
        location: "Delhi",
        tickets: [
          {
            ticket_id: 20,
            title: "New Ticket",
            body: "Ticket Body",
          },
        ],
      },
      {
        id: "141",
        name: "spsanchore13",
        age: 25,
        location: "Rajasthan",
        tickets: [
          {
            ticket_id: "181",
            title: "One Day Sick Leave",
            body: "Due to fever i want to take one day leave",
          },
          {
            ticket_id: "182",
            title: "Two Day Sick Leave",
            body: "Due to fever i want to take one day leave",
          },
        ],
      },
    ]);

    global.score += 2;
  });

  it("able to implement POST '/add/instructor' route", async () => {
    jest.spyOn(os, "userInfo").mockReturnValueOnce({ uid: "122" });
    jest.spyOn(os, "userInfo").mockReturnValueOnce({ username: "Shantilal" });
    jest.spyOn(os, "userInfo").mockReturnValueOnce({ gid: "113" });

    const instructor = {
      age: 20,
      location: "Jaipur",
      sub: "React Native",
      exp: 6,
    };

    const response = await request(app)
      .post("/add/instructor")
      .set("Content-Type", "application/json")
      .send(instructor);

    expect(response.body).toStrictEqual([
      {
        id: 1,
        name: "Chunnu",
        age: 45,
        location: "Patna",
        sub: "React",
        exp: 10,
      },
      {
        id: 2,
        name: "Payal",
        age: 32,
        location: "Delhi",
        sub: "Node",
        exp: 4,
      },
      {
        id: 501,
        name: "pulkittyagi",
        age: 25,
        location: "Delhi",
        sub: "Blockchain",
        exp: 4,
      },
      {
        id: "122",
        name: "Shantilal",
        age: 20,
        location: "Jaipur",
        sub: "React Native",
        exp: 6,
      },
    ]);

    global.score += 2;
  });

  it("able to implement GET '/students' route", async () => {
    const response = await request(app).get("/students");

    expect(response.body).toStrictEqual([
      {
        id: 1,
        name: "Aman",
        age: 23,
        location: "Pune",
        tickets: [
          {
            ticket_id: 1,
            title: "LMS Issue",
            body: "My LMS is not showing the lectures",
          },
          {
            ticket_id: 2,
            title: "Attendance",
            body: "Even though I have attended the lecture, I am marked absent",
          },
        ],
      },
      {
        id: 501,
        name: "pulkittyagi",
        age: 25,
        location: "Delhi",
        tickets: [
          {
            ticket_id: 20,
            title: "New Ticket",
            body: "Ticket Body",
          },
        ],
      },
      {
        id: "141",
        name: "spsanchore13",
        age: 25,
        location: "Rajasthan",
        tickets: [
          {
            ticket_id: "181",
            title: "One Day Sick Leave",
            body: "Due to fever i want to take one day leave",
          },
          {
            ticket_id: "182",
            title: "Two Day Sick Leave",
            body: "Due to fever i want to take one day leave",
          },
        ],
      },
    ]);

    global.score += 1;
  });

  it("able to implement GET '/instructors' route", async () => {
    const response = await request(app).get("/instructors");

    expect(response.body).toStrictEqual([
      {
        id: 1,
        name: "Chunnu",
        age: 45,
        location: "Patna",
        sub: "React",
        exp: 10,
      },
      {
        id: 2,
        name: "Payal",
        age: 32,
        location: "Delhi",
        sub: "Node",
        exp: 4,
      },
      {
        id: 501,
        name: "pulkittyagi",
        age: 25,
        location: "Delhi",
        sub: "Blockchain",
        exp: 4,
      },
      {
        id: "122",
        name: "Shantilal",
        age: 20,
        location: "Jaipur",
        sub: "React Native",
        exp: 6,
      },
    ]);

    global.score += 1;
  });

  it("able to implement GET '/tickets' route", async () => {
    const response = await request(app).get("/tickets");

    expect(response.text).toMatch(
      /Total number of tickets in the system are 5/
    );

    global.score += 1;
  });

  it("able to implement GET '/address' route", async () => {
    const response = await request(app).get("/address");

    expect(response.text).toMatch(
      /URL: masaischool.com IP Address: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} Family: IPv4/
    );

    global.score += 1;
  });

  it("able to maintain the 'logs.txt' file as per the instructions", () => {
    const logs = fs.readFileSync("./logs.txt", "utf-8").split("\n");

    expect(logs[0]).toMatch(
      /The home route visited at [A-Za-z]{3} [A-Za-z]{3} [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4} ( \(.*\))?/
    );
    expect(logs[1]).toMatch(
      /New student has been added to the database at [A-Za-z]{3} [A-Za-z]{3} [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4} ( \(.*\))?/
    );
    expect(logs[2]).toMatch(
      /New instructor has been added to the database at [A-Za-z]{3} [A-Za-z]{3} [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4} ( \(.*\))?/
    );
    expect(logs[3]).toMatch(
      /All the students data provided at [A-Za-z]{3} [A-Za-z]{3} [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4} ( \(.*\))?/
    );
    expect(logs[4]).toMatch(
      /All the instructors data provided at [A-Za-z]{3} [A-Za-z]{3} [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4} ( \(.*\))?/
    );
    expect(logs[5]).toMatch(
      /Total number of tickets in the system are \d+ at [A-Za-z]{3} [A-Za-z]{3} [0-9]{2} [0-9]{4} [0-9]{2}:[0-9]{2}:[0-9]{2} GMT[+-][0-9]{4} ( \(.*\))?/
    );
    expect(logs[6]).toMatch(
      /URL: masaischool.com IP Address: \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} Family: IPv4/
    );

    global.score += 1;
  });
});

afterAll((done) => {
  done();
  console.log("Final Score is", global.score);
});
