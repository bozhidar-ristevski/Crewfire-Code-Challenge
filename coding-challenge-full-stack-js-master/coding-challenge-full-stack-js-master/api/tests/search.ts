import supertest from "supertest";
import { expect } from 'chai';
import {app } from "../app";
import {formatJSONPResponse} from "../controllers/HelperController"


//in a real project all tests would have been in a different file...

const request = (url: string) => supertest(app).get(url);

describe('Fetch data', () => {
  it('should return a json from Flickr', async function () {
    const response = await request("/api/search");
    expect(response.text).to.have.string('"title": "Uploads from everyone"');
    expect(response.text).to.have.string('"items":');
    expect(response.text).to.have.string('"link":');
    expect(response.text).to.have.string('"media":');
    expect(response.text).to.have.string('"author":');
  });
});

describe('Format response', () => {
  it('should remove parentheses from the first and last position', function () {
    const result = formatJSONPResponse("(some text here)");
    expect(result).to.be.equal("some text here");
  });
});