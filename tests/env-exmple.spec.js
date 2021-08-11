const {expect} = require('chai');

describe('env test', () => {
    it("should have ENV1 equal to env1", async () => {
        expect(process.env.ENV1).to.equal('env1');
      });
      it("should have ENV2 equal to env2", async () => {
        expect(process.env.ENV2).to.equal('env2');
      }); 

      it("should have ENV3 equal to env3", async () => {
        expect(process.env.ENV2).to.equal('env2');
      }); 
  });