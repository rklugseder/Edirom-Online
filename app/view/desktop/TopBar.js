/**
 *  Edirom Online
 *  Copyright (C) 2014 The Edirom Project
 *  http://www.edirom.de
 *
 *  Edirom Online is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  Edirom Online is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with Edirom Online.  If not, see <http://www.gnu.org/licenses/>.
 */
Ext.define('EdiromOnline.view.desktop.TopBar', {
    extend: 'Ext.toolbar.Toolbar',

    requires: [
        'Ext.button.Split',
        'Ext.form.field.Text'
    ],

    alias : 'widget.topbar',
	id : 'ediromToolbar',
	
    initComponent: function () {

        var me = this;

        me.homeButton = Ext.create('Ext.button.Button', {
            id: 'homeBtn',
            cls: 'taskSquareButton home',
            tooltip: { text: getLangString('view.desktop.TaskBar_home'), align: 'bl-tl' }
        });
        
        me.workCombo = Ext.create('Ext.button.Button', {
            text: 'Werk',
            id: 'workSwitch',
            cls: 'insetButton',
            indent: false,
            menu : {
                items: []
            }
        });

        me.searchButton = Ext.create('Ext.button.Button', {
            id: 'searchBtn',
            cls: 'taskSquareButton search',
            tooltip: { text: getLangString('view.desktop.TaskBar_search'), align: 'bl-tl' },
            action: 'openSearchWindow'
        });

        me.searchTextField = Ext.create('Ext.form.TextField', {
            width: 180,
            id: 'searchTextFieldTop'
        });
        
        me.searchButton.textField = me.searchTextField;

        me.items = [
            new Ext.toolbar.Toolbar({
                flex: 1,
                cls: 'ux-desktop-topbar-flex',
                items: [
                    me.homeButton,
                    { xtype: 'tbtext', text: 'Freischütz', id: 'homeBtnLabel' },
                    this.workCombo,
                    '->',
                    //me.searchTextField,
                    me.searchButton
                ]
            })
        ];

        me.callParent();
    }
});