import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EpisodeService } from '../episode.service';

@Component({
  selector: 'app-novels-bar',
  templateUrl: './novels-bar.component.html',
  styleUrls: ['./novels-bar.component.scss']
})
export class NovelsBarComponent implements OnInit {

  novelsWithSections = [];

  constructor(private episodeService: EpisodeService) { }
  
  ngOnInit() {
    this.novelsWithSections = this.episodeService.getNovelsWithSections();
    console.log(this.novelsWithSections)
  }

}
