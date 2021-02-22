import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  isPdOpen = false;
  isAdfOpen = false;
  isTdOpen = false;
  isFdOpen = false;
  isSmdOpen = false;
  isRinOpen = false;
  isPrdOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePd = () => {
    this.isPdOpen = !this.isPdOpen;
    this.isAdfOpen = false;
    this.isTdOpen = false;
    this.isFdOpen = false;
    this.isSmdOpen = false;
    this.isRinOpen = false;
    this.isPrdOpen = false;
  }

  toggleAdf = () => {
    this.isAdfOpen = !this.isAdfOpen;
    this.isTdOpen = false;
    this.isFdOpen = false;
    this.isSmdOpen = false;
    this.isRinOpen = false;
    this.isPrdOpen = false;
    this.isPdOpen = false;
  }
  toggleTd = () => {
    this.isTdOpen = !this.isTdOpen;
    this.isAdfOpen = false;
    this.isFdOpen = false;
    this.isSmdOpen = false;
    this.isRinOpen = false;
    this.isPrdOpen = false;
    this.isPdOpen = false;
  }
  toggleFd = () => {
    this.isFdOpen = !this.isFdOpen;
    this.isAdfOpen = false;
    this.isTdOpen = false;
    this.isSmdOpen = false;
    this.isRinOpen = false;
    this.isPrdOpen = false;
    this.isPdOpen = false;
  }
  toggleSmd = () => {
    this.isSmdOpen = !this.isSmdOpen;
    this.isAdfOpen = false;
    this.isTdOpen = false;
    this.isFdOpen = false;
    this.isRinOpen = false;
    this.isPrdOpen = false;
    this.isPdOpen = false;
  }
  toggleRin = () => {
    this.isRinOpen = !this.isRinOpen;
    this.isAdfOpen = false;
    this.isTdOpen = false;
    this.isFdOpen = false;
    this.isSmdOpen = false;
    this.isPrdOpen = false;
    this.isPdOpen = false;
  }
  togglePrd = () => {
    this.isPrdOpen = !this.isPrdOpen;
    this.isAdfOpen = false;
    this.isTdOpen = false;
    this.isFdOpen = false;
    this.isSmdOpen = false;
    this.isRinOpen = false;
    this.isPdOpen = false;
  }

}
