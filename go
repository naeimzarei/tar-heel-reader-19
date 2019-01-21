#!/home/gb/bin/tmux source 
split-window -h -p 30 -c "#{pane_current_path}"
send-keys "ls *.json | entr -r npm start" C-m
split-window -v -c "#{pane_current_path}"
select-pane -L
