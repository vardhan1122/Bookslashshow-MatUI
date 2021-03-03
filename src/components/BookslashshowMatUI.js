import React from 'react';
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import { ChevronLeftOutlined } from "@material-ui/icons";
import { ChevronRightOutlined } from "@material-ui/icons";
import { ConfirmationNumberOutlined } from "@material-ui/icons";
import { FormatAlignJustifyOutlined } from "@material-ui/icons";
import { MovieFilterOutlined } from "@material-ui/icons";
import { PermPhoneMsgOutlined } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import { SubscriptionsOutlined } from "@material-ui/icons";
import { AppBar } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Hidden } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { Link } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function BookslashshowMatUI(props) {
  return (
    <div>
      <Hidden mdUp implementation="css">
        <Container maxWidth="xl" style={{ marginBottom: "123px" }}>
          <AppBar style={{ backgroundColor: "#333545" }}>
            <Toolbar />
            <Container style={{ marginTop: "-7px", position: "fixed" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                style={{ paddingTop: "9px" }}
              >
                <Grid zeroMinWidth item>
                  <div>
                    <Avatar
                      variant="rounded"
                      src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                    ></Avatar>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={3}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                      maxWidth: "150px",
                    }}
                  >
                    <IconButton
                      style={{ paddingTop: "5px", paddingBottom: "5px" }}
                    >
                      <SearchOutlined />
                    </IconButton>
                    <input
                      placeholder="Movies"
                      style={{
                        border: "none",
                        outline: "none",
                        maxWidth: "60px",
                        background: "none",
                      }}
                    ></input>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "15px",
                          marginTop: "-17px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.86)",
                          fontWeight: "500",
                        }}
                      >
                        Mumbai
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{
                          marginLeft: "40px",
                          borderColor: "#ffffff",
                          marginTop: "-1px",
                        }}
                      >
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div
                                style={{
                                  backgroundColor: "#ffffff",
                                  marginLeft: "10px",
                                  borderWidth: "1px",
                                  borderColor: "rgba(155,155,155,0.61)",
                                  borderStyle: "solid",
                                  marginRight: "10px",
                                }}
                              >
                                <IconButton
                                  style={{
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                  }}
                                >
                                  <SearchOutlined />
                                </IconButton>
                                <input
                                  placeholder="Search for your city"
                                  style={{
                                    border: "none",
                                    width: "400px",
                                    outline: "none",
                                    fontFamily: "sans-serif",
                                    background: "none",
                                  }}
                                ></input>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div style={{ textAlign: "center" }}>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                    fontWeight: "500",
                                  }}
                                >
                                  Popular Cities
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div style={{ padding: "10px" }}>
                          <Grid
                            container
                            alignContent="center"
                            spacing={4}
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  style={{
                                    width: "75px",
                                    background: "#499eff",
                                    height: "100px",
                                  }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Mumbai
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/india-gate-picture-id510795912?b=1&k=6&m=510795912&s=170667a&w=0&h=cR2yUMKGzCbLOSNFylPI2LOrZQBv-YyE9PT-JymRKPA="
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Delhi
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Bangaluru
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/charminar-picture-id172906779?b=1&k=6&m=172906779&s=170667a&w=0&h=gmNVdCVInASc9tDqV_YtmFpqFsV6Q21Acmb_8Czp1PI="
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Hyderabad
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://cdn.pixabay.com/photo/2016/02/16/06/54/chennai-1202694__340.jpg"
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Chennai
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div style={{ textAlign: "center" }}>
                                <Button
                                  style={{
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontFamily: "sans-serif",
                                    color: "#499eff",
                                    background: "none",
                                    fontWeight: "500",
                                  }}
                                >
                                  View All Cities
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ marginLeft: "20px" }}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      variant="outlined"
                      style={{
                        paddingTop: "3px",
                        textTransform: "none",
                        color: "rgba(255,255,255,0.86)",
                        paddingLeft: "20px",
                        fontSize: "12px",
                        paddingBottom: "3px",
                        borderColor: "#ffffff",
                        fontFamily: "sans-serif",
                        paddingRight: "20px",
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ textAlign: "right" }}>
                    <IconButton
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      <FormatAlignJustifyOutlined
                        style={{
                          color: "rgba(255,255,255,0.86)",
                          fontSize: "20px",
                        }}
                      />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <Container
              style={{
                backgroundColor: "#222539",
                paddingTop: "9px",
                paddingLeft: "20px",
                paddingBottom: "9px",
                marginTop: "48px",
                position: "fixed",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                alignContent="flex-start"
                alignItems="center"
                wrap="nowrap"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Movies
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Events
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Plays
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Sports
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Activities
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Monuments
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Fanhood
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Buzz
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item />
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            ListYourShow
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Corporates
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Offers
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "13px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Gifts Cards
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#f2f2f2",
            paddingTop: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Paper
            elevation={0}
            square
            style={{
              backgroundColor: "#f2f2f2",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <div>
              <Grid
                container
                alignContent="center"
                spacing={2}
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={6}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <div>
                    <Link>
                      <img
                        src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "150px" }}
                      ></img>
                    </Link>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={6}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <div>
                    <Link>
                      <img
                        src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "150px" }}
                      ></img>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div style={{ marginTop: "-117px" }}>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "rgba(155,155,155,0.68)",
                  float: "left",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronLeftOutlined
                  style={{ color: "#ffffff", fontSize: "40px" }}
                />
              </IconButton>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "rgba(155,155,155,0.68)",
                  float: "right",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronRightOutlined
                  style={{ color: "#ffffff", fontSize: "40px" }}
                />
              </IconButton>
            </div>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "150px",
              background: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Recommended Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1581516399438-a50b112e3105?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGNvdXBsZSUyMGZhc2hpb258ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        79%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        91k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Speakless Sarva"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Action"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlJTIwZmFzaGlvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        85%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        101k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Power Of Birth"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Biography"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Hindi"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1563293958-0b31aeb0cecb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGZhc2hpb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        74%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        52k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="VRV"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Thrillar"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Hindi & English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1561385346-f9218a858231?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGFkdmVudHVyZXMlMjBtZW58ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        83%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        129k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Until Death To Soul"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Philosophers"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "40px",
              background: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    The Best of Entertainment
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={6} md={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508002893583-47628161679c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3Nob3BzJTIwd2l0aCUyMG1lbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Workshops & More"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="311+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6} md={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="StayFit Live"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="49+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6} md={6}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1605020619129-7b25b6efd051?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGtpZHMlMjBwbGF5JTIwem9uZXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Kids Zone"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="149+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6} md={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1505430111830-b998ef798efa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc2hvd3N8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Kids Zone"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="369+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "30px",
              background: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Workshops For All
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2UlMjBjb21wdXRlciUyMGxhbmd1YWdlfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwards
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Data Science Cource"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Education"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZSUyMHNraWxsc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwards
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Digital Marketing Course"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Education"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1556353792-a5e0793e94a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhZGluZyUyMGluJTIwY29tcHV0ZXJ8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Sat at @6pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Stop Overthinking?"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Wellness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1601053662725-bde89a8b31c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhlcmJzfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Month 1st WEEK
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Using Ayurveda for Healthy Lifestyle"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Wellness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Popular Events
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1585152968992-d2b9444408cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwars
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Fitness Physical Club"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1578457303487-d0c0c8cd2f3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcnR5JTIwJTIwd29tZW5zJTIwaW4lMjBwdWJ8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Friday at @8pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="VR Night Market | Mumbai"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Fashion | Club | Bar | Restaurent"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1498888060481-6f3fa3a273c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Start On @Sat, 21 Nov
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Laugh Of Happy"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Happiness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1526398018-f9ee0723f228?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGxheWluZyUyMHdvbmRlcmxhfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Open at @Every Sat
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Playing of Wonderla"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Happiness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Top Games &amp; Sports Events
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwars
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Online Cricket for Kids"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/839428/pexels-photo-839428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Friday at @5pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Chess | Brain Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/896567/pexels-photo-896567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Mon, 16 Nov
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Baseball | Outdoor Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={6}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Open at @Every Sat
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Basketball | Indoor Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid container>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Trending Searches Right Now
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-start"
              spacing={2}
              style={{ paddingBottom: "15px", marginTop: "10px" }}
            >
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Laxmii
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Tenet
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Country War
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Andoon
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    RangDe
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Kala
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Bahubali2
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Avenger
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Sanju
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Avatar
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Kabali
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Ghaji
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    KGF
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Birth Fate
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    One Man Army
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
        <Paper square style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Grid container>
            <Grid zeroMinWidth item>
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "13px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    paddingLeft: "15px",
                  }}
                >
                  Mumbai
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          square
          style={{
            backgroundColor: "#f2f2f2",
            paddingBottom: "30px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Grid container style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Grid zeroMinWidth item>
              <div style={{ paddingTop: "35px" }}>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(74,74,74,0.92)",
                    fontWeight: "600",
                  }}
                >
                  Privacy Note
                </Typography>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "500",
                  }}
                >
                  <span>
                    By using www.bookslashshow.com(our website), you are fully
                    accepting the Privacy Policy available at{" "}
                  </span>
                  <span>
                    <Link
                      style={{ color: "#33a4fb", fontFamily: "sans-serif" }}
                    >
                      https://bookslashshow.com/privacy
                    </Link>
                  </span>
                  <span>
                    {" "}
                    governing your access to Bookslashshow and provision of
                    services by Bookslashshow to you. If you do not accept terms
                    mentioned in the{" "}
                  </span>
                  <span>
                    <Link
                      style={{ color: "#33a4fb", fontFamily: "sans-serif" }}
                    >
                      Privacy Policy
                    </Link>
                  </span>
                  <span>
                    , you must not share any of your personal information and
                    immediately exit Bookslashshow.
                  </span>
                </span>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square style={{ backgroundColor: "#333338" }}>
          <Paper
            square
            style={{
              background: "#333338",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              wrap="nowrap"
              justify="space-around"
              direction="row"
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
                paddingLeft: "10px",
                paddingRight: "25px",
              }}
            >
              <Grid zeroMinWidth item>
                <div>
                  <IconButton
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <MovieFilterOutlined
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    />
                  </IconButton>
                  <span style={{ fontFamily: "sans-serif", fontWeight: "200" }}>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: "700",
                      }}
                    >
                      List your Show{" "}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: "500",
                      }}
                    >
                      Got a show, event, activity or a great experience? Partner
                      with us &amp; amp; get listed on BookSlashShow
                    </span>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ marginRight: "20px" }}>
                  <Button
                    style={{
                      padding: "5px 20px",
                      textTransform: "none",
                      color: "#ffffff",
                      background: "#ec5e71",
                      fontWeight: "500",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Contact Today!
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              paddingTop: "10px",
              paddingBottom: "20px",
              background: "#404043",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <PermPhoneMsgOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  24/7 CUSTOMER CARE
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <ConfirmationNumberOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  RESEND BOOKING CONFIRMATION
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <SubscriptionsOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  SUBSCRIBE TO THE NEWSLETTER
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#333338",
              paddingTop: "40px",
              paddingBottom: "20px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <Grid
              container
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES PLAYING MUMBAI
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Suraj Pe Mangal Bhari
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dilwale Dulhania Le Jayenge
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      The New Mutants
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Tanhaji: The Unsung Warrior
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Joker
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Malang - Unleash The Madness
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Parasite (With English Subtitles)
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dum Laga Ke Haisha
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dil To Pagal Hai
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    UP COMMING MOVIES
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      RRR
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      KGF 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      RangDE
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Podi Mass
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Joker 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      U Turn 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Avengers 11
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Country Virus
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      The Hacking
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Againest Fight
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Border War 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Economics Fight
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Laxmi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Bramhastra
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Maidan
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Wonder Women
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Under The Water
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Beauty With Hungry
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES BY GENRE
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Action Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Devotional Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Psychological Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Historical Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Horror Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Mystery Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      War Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Adult Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Crime Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Period Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Thriller Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Romantic Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Comedy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Musical Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Classic Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Suspense Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Animation Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Adventure Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Fantacy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Political Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Sci-Fi Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Tragedy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Biograpy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES BY LANGUAGE
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Telugu
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Tamil
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Kannada
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Marathi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Hindhi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in English
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Panjabi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Bengali
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Urdu
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Spanice
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Malayalam
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Bengali
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{ backgroundColor: "#333338", paddingTop: "40px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={4}>
                <div
                  style={{
                    backgroundColor: "#4a4a4a",
                    marginLeft: "25px",
                    height: "2px",
                  }}
                ></div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.85)",
                    textAlign: "center",
                  }}
                >
                  <span>book</span>
                  <span
                    style={{
                      backgroundColor: "#c23e3e",
                      paddingBottom: "3px",
                      transform: "rotate(45deg)",
                    }}
                  >
                    slash
                  </span>
                  <span>show</span>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={4}>
                <div
                  style={{
                    backgroundColor: "#4a4a4a",
                    height: "2px",
                    marginRight: "25px",
                  }}
                ></div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{ backgroundColor: "#333338", paddingTop: "40px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-facebook-f"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "9px",
                        paddingLeft: "14px",
                        paddingBottom: "9px",
                        fontSize: "25px",
                        borderStyle: "none",
                        paddingRight: "14px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-twitter"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "9px",
                        paddingLeft: "9px",
                        fontSize: "25px",
                        paddingBottom: "9px",
                        borderStyle: "none",
                        paddingRight: "9px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-instagram"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "12px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "12px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-youtube"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "9px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "9px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-pinterest-p"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "13px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "13px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-linkedin-in"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "11px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "11px",
                      }}
                    ></i>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#333338",
              paddingTop: "40px",
              paddingBottom: "50px",
            }}
          >
            <Grid container alignContent="center">
              <Grid zeroMinWidth item>
                <div
                  style={{
                    textAlign: "center",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    Copyright 2020 © Slash Show Entertainment.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    The content and images used on this site are copyright
                    protected and copyrights vests with the respective owners.
                    The usage of the content and images on this website is
                    intended to promote the works and no endorsement of the
                    artist shall be implied.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    Unauthorized use is prohibited and punishable by law.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Hidden>
      <Hidden only={["lg", "xl"]} smDown implementation="css">
        <Container maxWidth="xl" style={{ marginBottom: "110px" }}>
          <AppBar style={{ backgroundColor: "#333545" }}>
            <Toolbar />
            <Container style={{ position: "fixed" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                style={{ paddingTop: "9px" }}
              >
                <Grid zeroMinWidth item>
                  <div>
                    <Avatar
                      variant="rounded"
                      src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                    ></Avatar>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <span>book</span>
                    <span
                      style={{
                        backgroundColor: "#c23e3e",
                        paddingBottom: "3px",
                        transform: "rotate(45deg)",
                      }}
                    >
                      slash
                    </span>
                    <span>show</span>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={5}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                      textAlign: "left",
                    }}
                  >
                    <IconButton
                      style={{ paddingTop: "5px", paddingBottom: "5px" }}
                    >
                      <SearchOutlined />
                    </IconButton>
                    <input
                      placeholder="Search for Movies,Events,Sports and Activities"
                      style={{
                        border: "none",
                        width: "300px",
                        outline: "none",
                        background: "none",
                      }}
                    ></input>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "15px",
                          marginTop: "-17px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.86)",
                          fontWeight: "500",
                        }}
                      >
                        Mumbai
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{
                          marginLeft: "40px",
                          borderColor: "#ffffff",
                          marginTop: "-1px",
                        }}
                      >
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div
                                style={{
                                  backgroundColor: "#ffffff",
                                  marginLeft: "10px",
                                  borderWidth: "1px",
                                  borderColor: "rgba(155,155,155,0.61)",
                                  borderStyle: "solid",
                                  marginRight: "10px",
                                }}
                              >
                                <IconButton
                                  style={{
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                  }}
                                >
                                  <SearchOutlined />
                                </IconButton>
                                <input
                                  placeholder="Search for your city"
                                  style={{
                                    border: "none",
                                    width: "400px",
                                    outline: "none",
                                    fontFamily: "sans-serif",
                                    background: "none",
                                  }}
                                ></input>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div style={{ textAlign: "center" }}>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                    fontWeight: "500",
                                  }}
                                >
                                  Popular Cities
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div style={{ padding: "10px" }}>
                          <Grid
                            container
                            alignContent="center"
                            spacing={4}
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  style={{
                                    width: "75px",
                                    background: "#499eff",
                                    height: "100px",
                                  }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Mumbai
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/india-gate-picture-id510795912?b=1&k=6&m=510795912&s=170667a&w=0&h=cR2yUMKGzCbLOSNFylPI2LOrZQBv-YyE9PT-JymRKPA="
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Delhi
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Bangaluru
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/charminar-picture-id172906779?b=1&k=6&m=172906779&s=170667a&w=0&h=gmNVdCVInASc9tDqV_YtmFpqFsV6Q21Acmb_8Czp1PI="
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Hyderabad
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://cdn.pixabay.com/photo/2016/02/16/06/54/chennai-1202694__340.jpg"
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Chennai
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div style={{ textAlign: "center" }}>
                                <Button
                                  style={{
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontFamily: "sans-serif",
                                    color: "#499eff",
                                    background: "none",
                                    fontWeight: "500",
                                  }}
                                >
                                  View All Cities
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ marginLeft: "20px" }}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      variant="outlined"
                      style={{
                        paddingTop: "3px",
                        textTransform: "none",
                        color: "rgba(255,255,255,0.86)",
                        paddingLeft: "20px",
                        fontSize: "12px",
                        paddingBottom: "3px",
                        borderColor: "#ffffff",
                        fontFamily: "sans-serif",
                        paddingRight: "20px",
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ textAlign: "right" }}>
                    <IconButton
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      <FormatAlignJustifyOutlined
                        style={{
                          color: "rgba(255,255,255,0.86)",
                          fontSize: "20px",
                        }}
                      />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <Container
              style={{
                backgroundColor: "#222539",
                paddingTop: "9px",
                paddingLeft: "20px",
                paddingBottom: "9px",
                marginTop: "64px",
                position: "fixed",
                paddingRight: "20px",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Movies
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Events
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Plays
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Sports
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Activities
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Monuments
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Fanhood
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Buzz
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item />
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            ListYourShow
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Corporates
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Offers
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Gifts Cards
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#f2f2f2",
            padding: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Paper
            elevation={0}
            square
            style={{
              backgroundColor: "#f2f2f2",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <div>
              <Grid
                container
                alignContent="center"
                spacing={2}
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={6}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <div>
                    <Link>
                      <img
                        src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={6}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <div>
                    <Link>
                      <img
                        src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "200px" }}
                      ></img>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div style={{ marginTop: "-140px" }}>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "rgba(155,155,155,0.68)",
                  float: "left",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronLeftOutlined
                  style={{ color: "#ffffff", fontSize: "40px" }}
                />
              </IconButton>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "rgba(155,155,155,0.68)",
                  float: "right",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronRightOutlined
                  style={{ color: "#ffffff", fontSize: "40px" }}
                />
              </IconButton>
            </div>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "220px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Recommended Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1581516399438-a50b112e3105?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGNvdXBsZSUyMGZhc2hpb258ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        79%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        91k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Speakless Sarva"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Action"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlJTIwZmFzaGlvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        85%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        101k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Power Of Birth"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Biography"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Hindi"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1563293958-0b31aeb0cecb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGZhc2hpb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        74%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        52k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="VRV"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Thrillar"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Hindi & English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1561385346-f9218a858231?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGFkdmVudHVyZXMlMjBtZW58ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        83%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        129k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Until Death To Soul"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Philosophers"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "40px",
              background: "none",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    The Best of Entertainment
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={4} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508002893583-47628161679c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3Nob3BzJTIwd2l0aCUyMG1lbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Workshops & More"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="311+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="StayFit Live"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="49+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1605020619129-7b25b6efd051?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGtpZHMlMjBwbGF5JTIwem9uZXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Kids Zone"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="149+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1505430111830-b998ef798efa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc2hvd3N8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Music Shows"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="369+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "30px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Workshops For All
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2UlMjBjb21wdXRlciUyMGxhbmd1YWdlfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwards
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Data Science Cource"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Education"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZSUyMHNraWxsc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwards
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Digital Marketing Course"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Education"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1556353792-a5e0793e94a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhZGluZyUyMGluJTIwY29tcHV0ZXJ8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Sat at @6pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Stop Overthinking?"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Wellness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1601053662725-bde89a8b31c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhlcmJzfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every 1 Week/Month
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Using Ayurveda for Healthy Lifestyle"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Wellness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Popular Events
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1585152968992-d2b9444408cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwars
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Fitness Physical Club"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1578457303487-d0c0c8cd2f3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcnR5JTIwJTIwd29tZW5zJTIwaW4lMjBwdWJ8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Friday at @8pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="VR Night Market | Mumbai"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Fashion | Club | Bar | Restaurent"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1498888060481-6f3fa3a273c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Start On @Sat, 21 Nov
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Laugh Of Happy"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Happiness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1526398018-f9ee0723f228?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGxheWluZyUyMHdvbmRlcmxhfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Open at @Every Sat
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Playing of Wonderla"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Happiness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Top Games &amp; Sports Events
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwars
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Online Cricket for Kids"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/839428/pexels-photo-839428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Friday at @5pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Chess | Brain Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/896567/pexels-photo-896567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Mon, 16 Nov
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Baseball | Outdoor Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "250px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Open at @Every Sat
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Basketball | Indoor Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid container>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Trending Searches Right Now
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-start"
              spacing={2}
              style={{ paddingBottom: "15px", marginTop: "10px" }}
            >
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Laxmii
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Tenet
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Country War
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Andoon
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    RangDe
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Kala
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Bahubali2
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Avenger
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Sanju
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Avatar
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Kabali
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Ghaji
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    KGF
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Birth Fate
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    One Man Army
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
        <Paper square>
          <Grid container>
            <Grid zeroMinWidth item>
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "13px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    paddingLeft: "50px",
                  }}
                >
                  Mumbai
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          square
          style={{ backgroundColor: "#f2f2f2", paddingBottom: "30px" }}
        >
          <Grid container>
            <Grid zeroMinWidth item>
              <div
                style={{
                  paddingTop: "35px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(74,74,74,0.92)",
                    fontWeight: "600",
                  }}
                >
                  Privacy Note
                </Typography>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "500",
                  }}
                >
                  <span>
                    By using www.bookslashshow.com(our website), you are fully
                    accepting the Privacy Policy available at{" "}
                  </span>
                  <span>
                    <Link
                      style={{ color: "#33a4fb", fontFamily: "sans-serif" }}
                    >
                      https://bookslashshow.com/privacy
                    </Link>
                  </span>
                  <span>
                    {" "}
                    governing your access to Bookslashshow and provision of
                    services by Bookslashshow to you. If you do not accept terms
                    mentioned in the{" "}
                  </span>
                  <span>
                    <Link
                      style={{ color: "#33a4fb", fontFamily: "sans-serif" }}
                    >
                      Privacy Policy
                    </Link>
                  </span>
                  <span>
                    , you must not share any of your personal information and
                    immediately exit Bookslashshow.
                  </span>
                </span>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square style={{ backgroundColor: "#333338" }}>
          <Paper square style={{ background: "#333338" }}>
            <Grid
              container
              alignContent="flex-start"
              alignItems="center"
              wrap="nowrap"
              justify="space-between"
              direction="row"
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Grid zeroMinWidth item xs={10}>
                <div>
                  <IconButton
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <MovieFilterOutlined
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    />
                  </IconButton>
                  <span style={{ fontFamily: "sans-serif", fontWeight: "200" }}>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: "700",
                      }}
                    >
                      List your Show{" "}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: "500",
                      }}
                    >
                      Got a show, event, activity or a great experience? Partner
                      with us &amp;amp; get listed on BookSlashShow
                    </span>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={2}>
                <div>
                  <Button
                    style={{
                      padding: "5px 20px",
                      textTransform: "none",
                      color: "#ffffff",
                      background: "#ec5e71",
                      fontWeight: "500",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Contact Today!
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              paddingTop: "10px",
              paddingBottom: "20px",
              background: "#404043",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <PermPhoneMsgOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  24/7 CUSTOMER CARE
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <ConfirmationNumberOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  RESEND BOOKING CONFIRMATION
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <SubscriptionsOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  SUBSCRIBE TO THE NEWSLETTER
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#333338",
              paddingTop: "40px",
              paddingBottom: "20px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES PLAYING MUMBAI
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Suraj Pe Mangal Bhari
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dilwale Dulhania Le Jayenge
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      The New Mutants
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Tanhaji: The Unsung Warrior
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Joker
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Malang - Unleash The Madness
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Parasite (With English Subtitles)
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dum Laga Ke Haisha
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dil To Pagal Hai
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    UP COMMING MOVIES
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      RRR
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      KGF 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      RangDE
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Podi Mass
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Joker 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      U Turn 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Avengers 11
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Country Virus
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      The Hacking
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Againest Fight
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Border War 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Economics Fight
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Laxmi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Bramhastra
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Maidan
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Wonder Women
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Under The Water
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Beauty With Hungry
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES BY GENRE
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Action Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Devotional Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Psychological Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Historical Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Horror Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Mystery Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      War Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Adult Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Crime Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Period Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Thriller Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Romantic Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Comedy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Musical Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Classic Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Suspense Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Animation Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Adventure Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Fantacy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Political Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Sci-Fi Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Tragedy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Biograpy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES BY LANGUAGE
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Telugu
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Tamil
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Kannada
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Marathi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Hindhi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in English
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Panjabi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Bengali
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Urdu
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Spanice
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Malayalam
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Bengali
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{ backgroundColor: "#333338", paddingTop: "40px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={5}>
                <div
                  style={{
                    backgroundColor: "#4a4a4a",
                    marginLeft: "25px",
                    height: "2px",
                  }}
                ></div>
              </Grid>
              <Grid zeroMinWidth item xs={2}>
                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.85)",
                    textAlign: "center",
                  }}
                >
                  <span>book</span>
                  <span
                    style={{
                      backgroundColor: "#c23e3e",
                      paddingBottom: "3px",
                      transform: "rotate(45deg)",
                    }}
                  >
                    slash
                  </span>
                  <span>show</span>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={5}>
                <div
                  style={{
                    backgroundColor: "#4a4a4a",
                    height: "2px",
                    marginRight: "25px",
                  }}
                ></div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{ backgroundColor: "#333338", paddingTop: "40px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-facebook-f"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "9px",
                        paddingLeft: "14px",
                        paddingBottom: "9px",
                        fontSize: "25px",
                        borderStyle: "none",
                        paddingRight: "14px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-twitter"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "9px",
                        paddingLeft: "9px",
                        fontSize: "25px",
                        paddingBottom: "9px",
                        borderStyle: "none",
                        paddingRight: "9px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-instagram"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "12px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "12px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-youtube"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "9px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "9px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-pinterest-p"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "13px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "13px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-linkedin-in"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "11px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "11px",
                      }}
                    ></i>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#333338",
              paddingTop: "40px",
              paddingBottom: "50px",
            }}
          >
            <Grid container alignContent="center">
              <Grid zeroMinWidth item>
                <div
                  style={{
                    textAlign: "center",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    Copyright 2020 © Slash Show Entertainment.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    The content and images used on this site are copyright
                    protected and copyrights vests with the respective owners.
                    The usage of the content and images on this website is
                    intended to promote the works and no endorsement of the
                    artist shall be implied.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    Unauthorized use is prohibited and punishable by law.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Hidden>
      <Hidden implementation="css" mdDown>
        <Container maxWidth="xl" style={{ marginBottom: "110px" }}>
          <AppBar style={{ backgroundColor: "#333545" }}>
            <Toolbar />
            <Container maxWidth="xl" style={{ position: "fixed" }}>
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-around"
                style={{ paddingTop: "9px" }}
              >
                <Grid zeroMinWidth item>
                  <div>
                    <Avatar
                      variant="rounded"
                      src="https://static1.squarespace.com/static/5df9ba9cfb325158acadf8b0/t/5f0301bb6e62565b9d585f91/1603697990249/?format=1500w"
                    ></Avatar>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <span>book</span>
                    <span
                      style={{
                        backgroundColor: "#c23e3e",
                        paddingBottom: "3px",
                        transform: "rotate(45deg)",
                      }}
                    >
                      slash
                    </span>
                    <span>show</span>
                  </div>
                </Grid>
                <Grid zeroMinWidth item xs={5}>
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                      borderRadius: "5px",
                      textAlign: "left",
                    }}
                  >
                    <IconButton
                      style={{ paddingTop: "5px", paddingBottom: "5px" }}
                    >
                      <SearchOutlined />
                    </IconButton>
                    <input
                      placeholder="Search for Movies,Events,Plays,Sports and Activities"
                      style={{
                        border: "none",
                        width: "400px",
                        outline: "none",
                        background: "none",
                      }}
                    ></input>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div>
                    <FormControl>
                      <InputLabel
                        style={{
                          fontSize: "15px",
                          marginTop: "-17px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.86)",
                          fontWeight: "500",
                        }}
                      >
                        Mumbai
                      </InputLabel>
                      <Select
                        variant="standard"
                        labelWidth={0}
                        style={{
                          marginLeft: "40px",
                          borderColor: "#ffffff",
                          marginTop: "-1px",
                        }}
                      >
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div
                                style={{
                                  backgroundColor: "#ffffff",
                                  marginLeft: "10px",
                                  borderWidth: "1px",
                                  borderColor: "rgba(155,155,155,0.61)",
                                  borderStyle: "solid",
                                  marginRight: "10px",
                                }}
                              >
                                <IconButton
                                  style={{
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                  }}
                                >
                                  <SearchOutlined />
                                </IconButton>
                                <input
                                  placeholder="Search for your city"
                                  style={{
                                    border: "none",
                                    width: "400px",
                                    outline: "none",
                                    fontFamily: "sans-serif",
                                    background: "none",
                                  }}
                                ></input>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div style={{ textAlign: "center" }}>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                    fontWeight: "500",
                                  }}
                                >
                                  Popular Cities
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div style={{ padding: "10px" }}>
                          <Grid
                            container
                            alignContent="center"
                            spacing={4}
                            alignItems="center"
                            justify="space-around"
                            direction="row"
                          >
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  style={{
                                    width: "75px",
                                    background: "#499eff",
                                    height: "100px",
                                  }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Mumbai
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/india-gate-picture-id510795912?b=1&k=6&m=510795912&s=170667a&w=0&h=cR2yUMKGzCbLOSNFylPI2LOrZQBv-YyE9PT-JymRKPA="
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Delhi
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://images.pexels.com/photos/2792601/pexels-photo-2792601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Bangaluru
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://media.istockphoto.com/photos/charminar-picture-id172906779?b=1&k=6&m=172906779&s=170667a&w=0&h=gmNVdCVInASc9tDqV_YtmFpqFsV6Q21Acmb_8Czp1PI="
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Hyderabad
                                </Typography>
                              </div>
                            </Grid>
                            <Grid zeroMinWidth item>
                              <div style={{ textAlign: "center" }}>
                                <img
                                  src="https://cdn.pixabay.com/photo/2016/02/16/06/54/chennai-1202694__340.jpg"
                                  style={{ width: "75px", height: "100px" }}
                                ></img>
                                <Typography
                                  variant="h6"
                                  style={{
                                    fontSize: "15px",
                                    fontFamily: "sans-serif",
                                  }}
                                >
                                  Chennai
                                </Typography>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                        <div>
                          <Grid container justify="space-around">
                            <Grid zeroMinWidth item xs={12}>
                              <div style={{ textAlign: "center" }}>
                                <Button
                                  style={{
                                    fontSize: "15px",
                                    textTransform: "none",
                                    fontFamily: "sans-serif",
                                    color: "#499eff",
                                    background: "none",
                                    fontWeight: "500",
                                  }}
                                >
                                  View All Cities
                                </Button>
                              </div>
                            </Grid>
                          </Grid>
                        </div>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid zeroMinWidth item style={{ marginLeft: "20px" }}>
                  <div style={{ textAlign: "right" }}>
                    <Button
                      variant="outlined"
                      style={{
                        paddingTop: "3px",
                        textTransform: "none",
                        color: "rgba(255,255,255,0.86)",
                        paddingLeft: "20px",
                        fontSize: "12px",
                        paddingBottom: "3px",
                        borderColor: "#ffffff",
                        fontFamily: "sans-serif",
                        paddingRight: "20px",
                      }}
                    >
                      Sign In
                    </Button>
                  </div>
                </Grid>
                <Grid zeroMinWidth item>
                  <div style={{ textAlign: "right" }}>
                    <IconButton
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      <FormatAlignJustifyOutlined
                        style={{
                          color: "rgba(255,255,255,0.86)",
                          fontSize: "20px",
                        }}
                      />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </Container>
            <Container
              maxWidth="xl"
              style={{
                backgroundColor: "#222539",
                paddingTop: "9px",
                paddingLeft: "50px",
                paddingBottom: "9px",
                marginTop: "64px",
                position: "fixed",
                paddingRight: "50px",
              }}
            >
              <Grid
                container
                alignContent="center"
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Movies
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Events
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Plays
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Sports
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Activities
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Monuments
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Fanhood
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Buzz
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item />
                  </Grid>
                </Grid>
                <Grid zeroMinWidth item>
                  <Grid
                    container
                    spacing={2}
                    justify="space-around"
                    direction="row"
                  >
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            ListYourShow
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Corporates
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Offers
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                    <Grid zeroMinWidth item>
                      <div>
                        <Link>
                          <Typography
                            variant="h6"
                            style={{
                              fontSize: "15px",
                              fontFamily: "sans-serif",
                              color: "rgba(255,255,255,0.93)",
                              fontWeight: "500",
                            }}
                          >
                            Gifts Cards
                          </Typography>
                        </Link>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Container>
          </AppBar>
        </Container>
        <Paper
          square
          style={{
            backgroundColor: "#f2f2f2",
            padding: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Paper elevation={0} square style={{ backgroundColor: "#f2f2f2" }}>
            <div>
              <Grid
                container
                alignContent="center"
                spacing={2}
                alignItems="center"
                justify="space-between"
                direction="row"
              >
                <Grid
                  zeroMinWidth
                  item
                  xs={6}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <div>
                    <Link>
                      <img
                        src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "250px" }}
                      ></img>
                    </Link>
                  </div>
                </Grid>
                <Grid
                  zeroMinWidth
                  item
                  xs={6}
                  style={{ backgroundColor: "#f2f2f2" }}
                >
                  <div>
                    <Link>
                      <img
                        src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBhcnR5fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        style={{ width: "100%", height: "250px" }}
                      ></img>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div style={{ marginTop: "-165px" }}>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "rgba(155,155,155,0.68)",
                  float: "left",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronLeftOutlined
                  style={{ color: "#ffffff", fontSize: "40px" }}
                />
              </IconButton>
              <IconButton
                style={{
                  borderRadius: "0px",
                  backgroundColor: "rgba(155,155,155,0.68)",
                  float: "right",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              >
                <ChevronRightOutlined
                  style={{ color: "#ffffff", fontSize: "40px" }}
                />
              </IconButton>
            </div>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "220px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Recommended Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1581516399438-a50b112e3105?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODh8fGNvdXBsZSUyMGZhc2hpb258ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        79%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        91k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Speakless Sarva"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Action"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlJTIwZmFzaGlvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        85%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        101k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Power Of Birth"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Biography"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Hindi"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1563293958-0b31aeb0cecb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzN8fGZhc2hpb258ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        74%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        52k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="VRV"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Thrillar"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Hindi & English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1561385346-f9218a858231?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGFkdmVudHVyZXMlMjBtZW58ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <i
                        className="fa fa-heart"
                        style={{ color: "#c33535", marginRight: "10px" }}
                      ></i>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                          marginRight: "10px",
                        }}
                      >
                        83%
                      </span>
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        129k votes
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Until Death To Soul"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Philosophers"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="English"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "40px",
              background: "none",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    The Best of Entertainment
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid container spacing={6} justify="space-around" direction="row">
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1508002893583-47628161679c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya3Nob3BzJTIwd2l0aCUyMG1lbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Workshops & More"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="311+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="StayFit Live"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="49+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1605020619129-7b25b6efd051?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGtpZHMlMjBwbGF5JTIwem9uZXxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Kids Zone"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="149+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1505430111830-b998ef798efa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fG11c2ljJTIwc2hvd3N8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Music Shows"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="369+ Events"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "30px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Workshops For All
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2UlMjBjb21wdXRlciUyMGxhbmd1YWdlfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwards
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Data Science Cource"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Education"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bGlmZSUyMHNraWxsc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwards
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Digital Marketing Course"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Education"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1556353792-a5e0793e94a7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhZGluZyUyMGluJTIwY29tcHV0ZXJ8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Sat at @6pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Stop Overthinking?"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Wellness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1601053662725-bde89a8b31c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGhlcmJzfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Month 1st WEEK
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Using Ayurveda for Healthy Lifestyle"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Wellness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Popular Events
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1585152968992-d2b9444408cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwars
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Fitness Physical Club"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1578457303487-d0c0c8cd2f3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcnR5JTIwJTIwd29tZW5zJTIwaW4lMjBwdWJ8ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Friday at @8pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="VR Night Market | Mumbai"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Fashion | Club | Bar | Restaurent"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1498888060481-6f3fa3a273c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Start On @Sat, 21 Nov
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Laugh Of Happy"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Happiness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1526398018-f9ee0723f228?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGxheWluZyUyMHdvbmRlcmxhfGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Open at @Every Sat
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="The Playing of Wonderla"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Happiness"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-between"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Top Games &amp; Sports Events
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Button
                    endIcon={
                      <ArrowForwardIosOutlined style={{ fontSize: "9px" }} />
                    }
                    style={{
                      border: "none",
                      textTransform: "none",
                      color: "#1a7aff",
                      background: "none",
                      fontWeight: "600",
                      paddingBottom: "0px",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    See All
                  </Button>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={4}
              wrap="nowrap"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/3628912/pexels-photo-3628912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Wed, 11 Nov onwars
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Online Cricket for Kids"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/839428/pexels-photo-839428.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Every Friday at @5pm
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Chess | Brain Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/896567/pexels-photo-896567.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Mon, 16 Nov
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Baseball | Outdoor Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={3}>
                <div>
                  <Card style={{ borderRadius: "10px" }}>
                    <img
                      src="https://images.pexels.com/photos/2346/sport-high-united-states-of-america-ball.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      style={{ width: "100%", height: "350px" }}
                    ></img>
                    <CardContent
                      style={{ background: "#000000", marginTop: "-4px" }}
                    >
                      <span
                        style={{
                          fontSize: "15px",
                          fontFamily: "sans-serif",
                          color: "rgba(255,255,255,0.8)",
                          fontWeight: "500",
                        }}
                      >
                        Open at @Every Sat
                      </span>
                    </CardContent>
                  </Card>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Basketball | Indoor Game"
                        style={{ marginTop: "-5px" }}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        secondary="Online Streaming"
                        style={{ marginTop: "-20px" }}
                      />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            elevation={0}
            style={{
              marginTop: "20px",
              background: "none",
              paddingRight: "40px",
              paddingLeft: "40px",
            }}
          >
            <Grid container>
              <Grid zeroMinWidth item>
                <div style={{ paddingBottom: "5px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "25px",
                      fontFamily: "sans-serif",
                      color: "rgba(0,0,0,0.78)",
                      fontWeight: "600",
                    }}
                  >
                    Trending Searches Right Now
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Grid
              container
              justify="flex-start"
              spacing={2}
              style={{ paddingBottom: "15px", marginTop: "10px" }}
            >
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Laxmii
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Tenet
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Country War
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Andoon
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    RangDe
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Kala
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Bahubali2
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Avenger
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Sanju
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Avatar
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Kabali
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Ghaji
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    KGF
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    Birth Fate
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    paddingLeft: "10px",
                    paddingRight: "40px",
                  }}
                >
                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                      color: "rgba(246,15,43,0.84)",
                      fontWeight: "600",
                    }}
                  >
                    One Man Army
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      color: "rgba(0,0,0,0.84)",
                      fontSize: "15px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Movies
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
        <Paper square>
          <Grid container>
            <Grid zeroMinWidth item>
              <div>
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "13px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    paddingLeft: "50px",
                  }}
                >
                  Mumbai
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          square
          style={{ backgroundColor: "#f2f2f2", paddingBottom: "30px" }}
        >
          <Grid container>
            <Grid zeroMinWidth item>
              <div
                style={{
                  paddingTop: "35px",
                  paddingLeft: "50px",
                  paddingRight: "50px",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "rgba(74,74,74,0.92)",
                    fontWeight: "600",
                  }}
                >
                  Privacy Note
                </Typography>
                <span
                  style={{
                    fontSize: "12px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "500",
                  }}
                >
                  <span>
                    By using www.bookslashshow.com(our website), you are fully
                    accepting the Privacy Policy available at{" "}
                  </span>
                  <span>
                    <Link
                      style={{ color: "#33a4fb", fontFamily: "sans-serif" }}
                    >
                      https://bookslashshow.com/privacy
                    </Link>
                  </span>
                  <span>
                    {" "}
                    governing your access to Bookslashshow and provision of
                    services by Bookslashshow to you. If you do not accept terms
                    mentioned in the{" "}
                  </span>
                  <span>
                    <Link
                      style={{ color: "#33a4fb", fontFamily: "sans-serif" }}
                    >
                      Privacy Policy
                    </Link>
                  </span>
                  <span>
                    , you must not share any of your personal information and
                    immediately exit Bookslashshow.
                  </span>
                </span>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper square style={{ backgroundColor: "#333338" }}>
          <Paper square style={{ background: "#333338" }}>
            <Grid
              container
              alignContent="flex-start"
              alignItems="center"
              wrap="nowrap"
              justify="space-around"
              direction="row"
              style={{
                paddingTop: "30px",
                paddingBottom: "20px",
                paddingLeft: "50px",
                paddingRight: "50px",
              }}
            >
              <Grid zeroMinWidth item>
                <div>
                  <IconButton
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    <MovieFilterOutlined
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    />
                  </IconButton>
                  <span style={{ fontFamily: "sans-serif", fontWeight: "200" }}>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: "700",
                      }}
                    >
                      List your Show{" "}
                    </span>
                    <span
                      style={{
                        color: "rgba(255,255,255,0.88)",
                        fontWeight: "500",
                      }}
                    >
                      Got a show, event, activity or a great experience? Partner
                      with us &amp;amp; get listed on BookSlashShow
                    </span>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div>
                  <Button
                    style={{
                      padding: "5px 20px",
                      textTransform: "none",
                      color: "#ffffff",
                      background: "#ec5e71",
                      fontWeight: "500",
                      fontSize: "16px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Contact Today!
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              paddingTop: "10px",
              paddingBottom: "20px",
              background: "#404043",
            }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <PermPhoneMsgOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  24/7 CUSTOMER CARE
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <ConfirmationNumberOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  RESEND BOOKING CONFIRMATION
                </Link>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ textAlign: "center" }}>
                  <IconButton>
                    <SubscriptionsOutlined
                      style={{
                        color: "rgba(155,155,155,0.66)",
                        fontSize: "40px",
                      }}
                    />
                  </IconButton>
                </div>
                <Link
                  style={{
                    fontSize: "11px",
                    fontFamily: "sans-serif",
                    color: "#9b9b9b",
                    fontWeight: "600",
                  }}
                >
                  SUBSCRIBE TO THE NEWSLETTER
                </Link>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#333338",
              paddingTop: "40px",
              paddingBottom: "20px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <Grid container>
              <Grid zeroMinWidth item>
                <div>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES PLAYING MUMBAI
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Suraj Pe Mangal Bhari
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dilwale Dulhania Le Jayenge
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      The New Mutants
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Tanhaji: The Unsung Warrior
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Joker
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Malang - Unleash The Madness
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Parasite (With English Subtitles)
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dum Laga Ke Haisha
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Dil To Pagal Hai
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    UP COMMING MOVIES
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      RRR
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      KGF 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      RangDE
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Podi Mass
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Joker 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      U Turn 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Avengers 11
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Country Virus
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      The Hacking
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Againest Fight
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Border War 2
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Economics Fight
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Laxmi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Bramhastra
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Maidan
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Wonder Women
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Under The Water
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Beauty With Hungry
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES BY GENRE
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      align="left"
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Action Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Devotional Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Psychological Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Historical Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Horror Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Mystery Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      War Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Adult Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Crime Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Period Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Thriller Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Romantic Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Comedy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Musical Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Classic Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Suspense Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Animation Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Adventure Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Fantacy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Political Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Sci-Fi Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Tragedy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Biograpy Movies
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
              <Grid zeroMinWidth item>
                <div style={{ paddingTop: "20px" }}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{
                      fontSize: "15px",
                      paddingBottom: "5px",
                      fontFamily: "sans-serif",
                      color: "#9b9b9b",
                      fontWeight: "500",
                    }}
                  >
                    MOVIES BY LANGUAGE
                  </Typography>
                  <span style={{ color: "#ffffff", fontSize: "12px" }}>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Telugu
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Tamil
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Kannada
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Marathi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Hindhi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in English
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Panjabi
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Bengali
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Urdu
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Spanice
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Malayalam
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                    <Link
                      style={{
                        color: "rgba(155,155,155,0.61)",
                        fontSize: "11px",
                        fontFamily: "sans-serif",
                      }}
                    >
                      Movies in Bengali
                      <span
                        style={{
                          color: "#9b9b9b",
                          paddingLeft: "1px",
                          paddingRight: "1px",
                        }}
                      >
                        {" "}
                        |{" "}
                      </span>
                    </Link>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{ backgroundColor: "#333338", paddingTop: "40px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item xs={5}>
                <div
                  style={{
                    backgroundColor: "#4a4a4a",
                    marginLeft: "25px",
                    height: "2px",
                  }}
                ></div>
              </Grid>
              <Grid zeroMinWidth item xs={2}>
                <div
                  style={{
                    fontSize: "20px",
                    fontFamily: "sans-serif",
                    color: "rgba(255,255,255,0.85)",
                    textAlign: "center",
                  }}
                >
                  <span>book</span>
                  <span
                    style={{
                      backgroundColor: "#c23e3e",
                      paddingBottom: "3px",
                      transform: "rotate(45deg)",
                    }}
                  >
                    slash
                  </span>
                  <span>show</span>
                </div>
              </Grid>
              <Grid zeroMinWidth item xs={5}>
                <div
                  style={{
                    backgroundColor: "#4a4a4a",
                    height: "2px",
                    marginRight: "25px",
                  }}
                ></div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{ backgroundColor: "#333338", paddingTop: "40px" }}
          >
            <Grid
              container
              alignContent="center"
              alignItems="center"
              justify="space-around"
              direction="row"
            >
              <Grid zeroMinWidth item>
                <div>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-facebook-f"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "9px",
                        paddingLeft: "14px",
                        paddingBottom: "9px",
                        fontSize: "25px",
                        borderStyle: "none",
                        paddingRight: "14px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-twitter"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "9px",
                        paddingLeft: "9px",
                        fontSize: "25px",
                        paddingBottom: "9px",
                        borderStyle: "none",
                        paddingRight: "9px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-instagram"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "12px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "12px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-youtube"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "9px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "9px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-pinterest-p"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "13px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "13px",
                      }}
                    ></i>
                  </span>
                  <span style={{ paddingLeft: "10px" }}>
                    <i
                      className="fab fa-linkedin-in"
                      style={{
                        borderRadius: "50px",
                        backgroundColor: "#5d5d5f",
                        paddingTop: "10px",
                        paddingLeft: "11px",
                        fontSize: "25px",
                        paddingBottom: "10px",
                        borderStyle: "none",
                        paddingRight: "11px",
                      }}
                    ></i>
                  </span>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper
            square
            style={{
              backgroundColor: "#333338",
              paddingTop: "40px",
              paddingBottom: "50px",
            }}
          >
            <Grid container alignContent="center">
              <Grid zeroMinWidth item xs={12}>
                <div
                  style={{
                    textAlign: "center",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    Copyright 2020 © Slash Show Entertainment.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    The content and images used on this site are copyright
                    protected and copyrights vests with the respective owners.
                    The usage of the content and images on this website is
                    intended to promote the works and no endorsement of the
                    artist shall be implied.
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    style={{ color: "#5d5d5f", fontSize: "11px" }}
                  >
                    Unauthorized use is prohibited and punishable by law.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Hidden>
    </div>
  );
}

export default BookslashshowMatUI;
