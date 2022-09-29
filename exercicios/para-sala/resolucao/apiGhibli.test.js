const request = require("supertest");
const ApiUrl = "https://ghibliapi.herokuapp.com";

describe("GET /films/{id}", () => {
  test("deve retornar o filme meu amigo totoro", () => {
    return request(ApiUrl)
      .get("/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49")
      .expect(200)
      .then((response) => {
        expect(response.body.title).toEqual("My Neighbor Totoro");
      });
  });

  test("deve retornar 404 ao passar um id inválido", () => {
    request(ApiUrl)
      .get("/films/000")
      .expect(404)
      .then((response) => {
        expect(response.statusCode).toEqual(404);
      });
  });
});

describe("GET/people", () => {
  test("deve retornar 200 e encontrar a personagem Chihiro", () => {
    request(ApiUrl)
      .get("/people")
      .expect(200)
      .then((response) => {
        expect((response) => {
          expect(response.body).toEqual(
            expect.arrayContaining([ //utilizado para econtrar algo dentro do array, quando não souber a posição.
              expect.objectContaining({ name: "Chihiro Origino" }),
            ])
          );
        });
      });
  });
});
