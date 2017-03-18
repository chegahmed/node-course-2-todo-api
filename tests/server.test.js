/**
 * Created by ahmed on 18/03/2017.
 */

const expect =require('expect');
const request =require('supertest');


const {app} =require('./../server');
const  {Todo} =require('./../models/todo');

beforEach((done)=>{
    Todo.remove({}).then(() =>done());
});

describe('POST /todos',() =>{
    it('should create a new todo',(done)=>{
        var text ='Test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(201)
            .expect((res)=>{
                expect(res.body.text).toBe(text+'1');
            })
            .end((err,res)=>{
                if(err){
                    return done(err);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) =>done(e));
            });
    });

    it('should not create todo with invalid body data',(done) =>{
        request(app)
            .post('/todos')
            .send({})
            .expect(400)
            .end((err,res) =>{
                if(err){
                    return done(err);
                }

                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(0);
                    done();
                }).catch((e) => done(e));
            });
    });

});