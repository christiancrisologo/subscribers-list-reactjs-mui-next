import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, FlatButton, Drawer, MenuItem, IconButton, IconMenu } from 'material-ui';
import ArrowLeftIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

export default class extends Component {
  state = {
    open: false,
  };

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
  };
  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    const { children, title, appName } = this.props;
    const leftAppBarButton = (
      <IconMenu
        iconButtonElement={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    );

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{title}</title>
        </Head>
        <div className="main-wrapper">
          <MuiThemeProvider>
            <Drawer width={250} open={this.state.open}>
              <AppBar
                title={appName || 'COOL'}
                iconStyleLeft={{ display: 'none' }}
                iconElementLeft={null}
                iconElementRight={
                  <IconButton onClick={this.handleClose}>
                    <ArrowLeftIcon color="white" />
                  </IconButton>
                }
              />
              <MenuItem onClick={this.handleClose} leftIcon={<ContentInbox />}>
                My Subscribers
              </MenuItem>
              <MenuItem onClick={this.handleClose} leftIcon={<ActionGrade />}>
                Manage Subscriber
              </MenuItem>
            </Drawer>
            <AppBar
              title={title}
              iconElementRight={<FlatButton label="Login" />}
              iconElementRight={leftAppBarButton}
              onLeftIconButtonClick={this.handleToggle}
            />
            <div className="content">{children}</div>
          </MuiThemeProvider>
        </div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: Roboto, Arial;
          }
          .main-wrapper {
            width: 100%;
            min-height: 100%;
            height: 100%;
            overflow-x: hidden;
          }
          .content {
            width: 100%;
            height: 100%;
            padding: 24px;
          }
        `}</style>
      </div>
    );
  }
}
