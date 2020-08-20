import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    // MongoDB
    if (this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: 'fff', height: '176px', background:
                'url(https://blog.dataiku.com/hubfs/Blog/mongo_db.png) center /cover'
            }}> MongoDB Project 1</CardTitle>
            <CardText>
              This is a project that used MongoDB.
          </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: 'fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{
              color: 'fff', height: '176px', background:
                'url(https://blog.dataiku.com/hubfs/Blog/mongo_db.png) center /cover'
            }}> MongoDB Project 1</CardTitle>
            <CardText>
              This is a project that used MongoDB.
        </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: 'fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
          <CardTitle style={{
            color: 'fff', height: '176px', background:
              'url(https://miro.medium.com/fit/c/1838/551/0*r1BTGwo9cd8IGNQQ.jpeg) center /cover'
          }}> Express Project</CardTitle>
          <CardText>
            This is a project that used Express.
          </CardText>
          <CardActions border>
            <Button colored>Github</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{ color: 'fff' }}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is React</h1></div>
      )
    } else {
      return (
        <div><h1>This is Node</h1></div>
      )
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>MongoDB</Tab>
          <Tab>Express</Tab>
          <Tab>React</Tab>
          <Tab>Node.js</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;

