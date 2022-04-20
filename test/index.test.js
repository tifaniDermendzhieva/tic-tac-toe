const tikTakToe = require("../index.js");
const {expect} = require('chai');


describe('tiktaktoe tests', ()=>{

    it('player1 wins 1 row', ()=>{
        let game = ['X', 'X', 'X', 
         'O', 'O ', 'X',
        'X', 'X', 'O'];
        expect(tikTakToe(game)).to.be.true;

    });

    
    it('player1 wins 2 row', ()=>{
        let game = ['X', 'X', 'O',
         'X', 'X', 'X', 
         ' ', ' ', ' '];
        expect(tikTakToe(game)).to.be.true;

    });

    it('player1 wins 3 row', ()=>{
        let game = ['X', 'X', 'O', 'X', 'O', 'X', 'X', 'X', 'X'];
        expect(tikTakToe(game)).to.be.true;

    });

    it('player1 wins 2 diagonal', ()=>{
        let game = ['X', 'X', 'O',
         'X', 'O', 'X',
          'O', 'X', 'X'];
        expect(tikTakToe(game)).to.be.true;

    });

    it('player1 wins 1 diagonal', ()=>{
        let game = ['O', 'X', 'X',
         'X', 'O', 'X',
          'X', 'X', 'O'];
        expect(tikTakToe(game)).to.be.true;

    });

    it('player1 wins 1 col', ()=>{
        let game = ['O', 'X', 'X',
         'O', 'O', 'X',
          'O', 'X', 'O'];
        expect(tikTakToe(game)).to.be.true;

    });

    it('player1 wins 2 col', ()=>{
        let game = ['O', 'X', 'X',
         'O', 'X', 'X',
          'X', 'X', 'O'];
        expect(tikTakToe(game)).to.be.true;

    });

    it('player1 wins 2 col', ()=>{
        let game = ['O', 'X', 'X',
         'O', 'O', 'X',
          'X', 'X', 'X'];
        expect(tikTakToe(game)).to.be.true;

    });

    it('should return false when it is tie', ()=>{
        let game = ['O', 'X', 'X',
         'O', 'O ', 'X',
          'X', 'X', 'O'];
        expect(tikTakToe(game)).to.be.false;

    });

    it('should return false when the game field is empty', ()=>{
        let game = [];
        expect(tikTakToe(game)).to.be.false;

    });

    it('should return false when the game field only contains empty fields', ()=>{
        let game = [ ' ', ' ', ' ',' ', ' ', ' ',' ', ' ', ' '];
        expect(tikTakToe(game)).to.be.false;

    });

    it('should return false when the game field less than 9 elements', ()=>{
        let game = [ ' ', ' ', ' ',' ', ' ', ' '];
        expect(tikTakToe(game)).to.be.false;

    });

    it('should return false when the game field more than 9 elements', ()=>{
        let game = [ ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' ', ' ', ' ',' ', ' ', ' '];
        expect(tikTakToe(game)).to.be.false;

    });

});

