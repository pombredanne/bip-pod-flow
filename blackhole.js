/**
 *
 * The Bipio Flow Pod.  blackhole action definition
 * ---------------------------------------------------------------
 *
 * @author Michael Pearson <michael@cloudspark.com.au>
 * Copyright (c) 2010-2013 CloudSpark pty ltd http://www.cloudspark.com.au
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

function BlackHole() {
    this.name = 'blackhole';
    this.description = 'Blackhole',
    this.description_long = 'Drops a message on the floor. Ends delivery',
    this.trigger = false;
    this.singleton = true;
}

BlackHole.prototype = {};

BlackHole.prototype.getSchema = function() {
    return {}
}

/**
 * Invokes (runs) the action.
 */
BlackHole.prototype.invoke = function(imports, channel, sysImports, contentParts, next) {
}

// -----------------------------------------------------------------------------
module.exports = BlackHole;