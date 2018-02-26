import {Component, OnInit, Input} from '@angular/core';
import {MenuData} from './app-model';

/**
 * 左侧菜单组件
 */
@Component({
  selector: 'c-sidebar-menu',
  template: `    
    <div class="c-nav" c-custom-scrollbar>
      <ul class="c-sidebar-menu">
        <li *ngFor="let item of data">
          <a (click)="itemClicked(item);">
            <i style="margin-top:3px;width:17px" class="fa  pull-right"
               [ngClass]="{'fa-angle-down': !isLeaf(item) && item.isExpend, 'fa-angle-left': !isLeaf(item) && !item.isExpend}"></i>
            <i class="fa " [ngClass]="item.icon"></i> <span>{{item.name}}</span>
          </a>
          <c-treeview-menu [data]="item"></c-treeview-menu>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent{

 /* 输入数据*/
  @Input() data: Array<MenuData>;

  /**
   * 是否有子节点
   * @param item
   */
  isLeaf(item: MenuData) {
    return !item.children || !item.children.length;
  }

  /**
   * 点击
   * @param item
   */
  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      for (let obj of this.data) {
        if (obj.id != item.id) {
          obj.isExpend = false;
        }
      }
      item.isExpend = !item.isExpend;
    }
  }

}
